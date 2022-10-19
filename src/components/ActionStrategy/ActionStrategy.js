import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'

export default function ActionStrategy() {

  const [strategy, setStrategy]= useState([]);

  useEffect(()=>{
    const options={
      method:'GET', 
      headers:{}
    }

    fetch(`${BASE_URL}/activity/models/Action_Strategy_Model/`, options)
    .then(response=>response.json())
    .then(data=>{setStrategy(data)})
  },[])

  return (
    <>
    {
      <>
      <img src={strategy.image} alt="image" />
      <h3>{strategy.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: `${strategy.body}` }} />
      <time>{strategy.date}</time>
      </>
    }
    </>
  )
}
