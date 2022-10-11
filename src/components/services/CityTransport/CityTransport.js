import React, { useEffect, useState } from 'react'

export default function CityTransport() {

  const [cityTransport, setCityTransport]= useState([])
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`https://turtkul41.herokuapp.com/services/Services_Transport`, options)
    .then(response=>response.json())
    .then(data=>{console.log('cityTransportData=>', data); setCityTransport(data)})
  },[])
  return (
    <>
    <h3>{cityTransport.title}</h3>
    <p dangerouslySetInnerHTML={{ __html: `${cityTransport.body}` }} />
    </>
  )
}
