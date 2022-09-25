import React, { useEffect, useState } from 'react'

export default function ActionStrategy() {

  const [strategy, setStrategy]= useState([]);

  useEffect(()=>{
    const options={
      method:'GET', 
      headers:{}
    }

    fetch(`https://turtkul41.herokuapp.com/activity/models/Action_Strategy_Model/`, options)
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
