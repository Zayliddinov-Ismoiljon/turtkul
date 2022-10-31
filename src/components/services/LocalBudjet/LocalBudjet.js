import { BASE_URL } from 'api/config'
import React, { useEffect, useState } from 'react'
import { LocalBudjetStyled } from './LocalBudjet.styles'

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
    <LocalBudjetStyled>
    <h3 className='budjet-title'>{localBudjet.title}</h3>
    <p dangerouslySetInnerHTML={{ __html: `${localBudjet.body}` }} />
    </LocalBudjetStyled>
  )
}
