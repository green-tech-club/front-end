import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent(props) {
  const chartRef = React.createRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    const newChartInstance = new Chart(myChartRef, {
      type: props.type,
      data: props.data,
      options: props.options
    });

    setChartInstance(newChartInstance);

    return () => newChartInstance.destroy();
  }, [props]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
}

export default ChartComponent;
