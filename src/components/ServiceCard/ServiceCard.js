import React from 'react';
import './style.css';

import { Doughnut, Bar } from 'react-chartjs-2';

function ServiceCard(props) {

  let options;
  let data;

  if (props.service === 'network') {
    data = {
      labels: ['DOWNLOAD', 'UPLOAD'],
      datasets: [{
        data: [props.data1, props.data2],
        backgroundColor: [props.color1, props.color2],
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      }]
    };

    options = {
      legend: { display: false },
      scales: {
        yAxes: [{ 
          display: false,
          ticks: { beginAtZero: true }
        }],
        xAxes: [{ display: false }],        
      },
    }
  } else {
    data = {
      labels: ['USED', 'AVAILABLE'],
      datasets: [{
        data: [props.data1, props.data2],
        backgroundColor: [props.color1, props.color2]
      }]
    };
    options = {
      legend: { display: false },
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI
    }
  }

  return (
    <div className="service-card">
      <div className="card-icon">
        <img src={props.icon} alt={props.alt}/>
      </div>
      <div className="card-info">
        <h1>{props.cardHeader}</h1>
        <p>{props.cardInfo}</p>
        <p>{props.cardDetail}</p>
      </div>
      <div className="card-graph">
        { props.service === 'network' &&
          <Bar 
            data={data}
            options={options}
          />
        }
        { props.service !== 'network' &&
          <Doughnut 
            data={data} 
            options={options}
          />
        }
      </div>
    </div>
  )
}

export default ServiceCard;