import { BASE_URL } from 'api/config'
import React, { useEffect, useState } from 'react'
import { LicensingServicesStyled } from './LicensingServicies.styles'

export default function LicensingServices() {
  const [licensingServices, setLicensingServices]= useState([])
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`${BASE_URL}services/Services_Licence`, options)
    .then(response=>response.json())
    .then(data=> {setLicensingServices(data)})
  },[])
  return (
    <LicensingServicesStyled>
    <h3 className='licensing-title'>{licensingServices.title}</h3>
    <a href={licensingServices.file} target='_blank'>
      <img width={'50px'} height={'50px'} src="https://www.tashkent.uz/assets/public/images/pdf.svg" alt="file image" />
    </a>
    </LicensingServicesStyled>
  )
}
