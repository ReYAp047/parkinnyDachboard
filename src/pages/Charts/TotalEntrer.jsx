import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { TotalEntrerData } from '../../data/data';
import { useStateContext } from '../../contexts/ContextProvider';

const TotalEntrer = () => {
  const { currentMode } = useStateContext();

  return (

    <div className=" bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div>
        <ChartComponent
          primaryXAxis={{ valueType: 'Category', title: 'Periode' }}
          primaryYAxis={{ title: 'Total voiture enter par periode' }}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={TotalEntrerData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default TotalEntrer;
