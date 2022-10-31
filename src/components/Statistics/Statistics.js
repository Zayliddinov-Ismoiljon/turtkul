// While using the dependency of the Biz chart i have got this error message. "Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons"

import React, { useEffect, useState } from 'react';
import { Line, Column } from '@ant-design/charts';
import { BASE_URL } from 'api/config';
import { StatisticsStyled } from './Statistics.styles';

const Statistics = () => {

	const [statistic, setStatistic]= useState([]);

	useEffect(()=>{
		const options= {
			method:'GET',
			headers:{}
		}

		fetch(`${BASE_URL}about_authority/Statistics_Model`, options)
		.then(response=> response.json())
	.then(data=> {setStatistic(data); console.log('statisticData', data);})
	},[])
	
	const data = [
		{
			"title": "xxxxxxxxxxxxx",
			"amount": 6.75
	},
	{
			"title": "jhjgkjg,g",
			"amount": 8.97
	},
	{
			"title": ",nkhvmghvmh",
			"amount": 7.0
	}
  ];
  const config = {
    data: statistic,
    xField: 'title',
    yField: 'amount',
    label: {
      position: 'middle',
      // 'top', 'bottom', 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
  };

	return (
		<StatisticsStyled>
			<Column {...config} />
		</StatisticsStyled>
	);
};

export default Statistics;
