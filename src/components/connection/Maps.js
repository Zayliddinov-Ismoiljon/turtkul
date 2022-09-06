import React from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

export default function Maps() {

  const {isLoaded}= useLoadScript({
    googleMapsApiKey: process.env.MAPS_API_KEY
  })

  if(!isLoaded) {
     <div>Loading...</div>
  }else{
    <Map/>
  }

  function Map() {
    return (
      <GoogleMap
      zoom={10}
      center={{lat:44, lng:-80}}
      mapContainerClassName='map-container'
      >
        <Marker position={{lat:44, lng:-80}}/>
      </GoogleMap>
    )
  }
}
