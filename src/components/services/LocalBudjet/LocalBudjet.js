import { BASE_URL } from 'api/config'
import React, { useEffect, useState } from 'react'

export default function LocalBudjet() {

  const [localBudjet, setLocalBudjet]= useState([])
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`${BASE_URL}services/Services_Budget`, options)
    .then(response=>response.json())
    .then(data=> {console.log('data===>>', data); setLocalBudjet(data)})
  },[])
  return (
    <>
    <h3>{localBudjet.title}</h3>
    <p dangerouslySetInnerHTML={{ __html: `${localBudjet.body}` }} />
    </>
  )
}
