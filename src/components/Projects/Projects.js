import { Card } from 'antd'
import { BASE_URL } from 'api/config'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  const [projects, setProjects]= useState([])
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{}
    }

    fetch(`${BASE_URL}activity/models/Projects_Model/`, options)
    .then(response=>response.json())
    .then(data=>{setProjects(data)})
  },[])
  return (
    <>
    {
      projects.map((item,i)=>(
        <Card key={i}>
        <Link to={`/activity/projects/${item?.id}`}>
        <img src={item.image} alt="images" />
        </Link>
        <h4>{item.title}</h4>
        </Card>
      ))
    }
    </>
  )
}
