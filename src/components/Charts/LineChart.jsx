import React, { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Category, Legend, DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';

// import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { chiffreData } from '../../data/data';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      primaryXAxis={{ valueType: 'Category', title: 'Mois' }}
      primaryYAxis={{ title: 'Chiffre d affaire' }}
      legendSettings={{ visible: true, background: 'white' }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective type="Line" dataSource={chiffreData} xName="month" yName="chiffre" name="Chiffre" marker={{ dataLabel: { visible: true }, visible: true }} />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
