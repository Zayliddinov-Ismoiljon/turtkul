import React, { useEffect, useState } from 'react'
import data from 'store/data/static-language-data';

export default function GovernmentPrograms() {
  const [governmentPrograms, setGovernmentPrograms]= useState([]);
  useEffect(()=>{
    const options={
      method:'GET', 
      headers:{}
    }

    fetch(`https://turtkul41.herokuapp.com/activity/models/Government_Programs_Model/`, options)
    .then(response=>response.json())
    .then(data=>setGovernmentPrograms(data))
  },[])


  return (
    <>
    <img src={governmentPrograms.image} alt="image" />
    <h3>{governmentPrograms.title}</h3>
    <p dangerouslySetInnerHTML={{ __html: `${governmentPrograms.body}` }} />
    <time>{governmentPrograms.date}</time>
    </>
  )
}
