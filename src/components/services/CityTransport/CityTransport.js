import { BASE_URL } from 'api/config'
import React, { useEffect, useState } from 'react'

export default function CityTransport() {

  const [cityTransport, setCityTransport]= useState([])
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`${BASE_URL}services/Services_Transport`, options)
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
