import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, SplineAreaSeries, Legend, HiloOpenCloseSeries } from '@syncfusion/ej2-react-charts';

import { ocupationData } from '../../data/data';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className=" bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div>
        <ChartComponent
          id="Area"
          primaryXAxis={{ valueType: 'Category', title: 'Mois' }}
          primaryYAxis={{ title: 'Chiffre d affaire' }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[HiloOpenCloseSeries, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective type="HiloOpenCloseSeries" dataSource={ocupationData} xName="month" yName="chiffre" name="Chiffre" />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
