import React, { useEffect, useState } from 'react'

export default function LicensingServices() {
  const [licensingServices, setLicensingServices]= useState([])
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`https://turtkul41.herokuapp.com/services/Services_Licence`, options)
    .then(response=>response.json())
    .then(data=> {setLicensingServices(data); console.log(licensingServices);})
  },[])
  return (
    <>
    <h3>{licensingServices.title}</h3>
    <a href={licensingServices.file} target='_blank'>
      <img width={'50px'} height={'50px'} src="https://www.tashkent.uz/assets/public/images/pdf.svg" alt="file image" />
    </a>
    </>
  )
}