import React, {useState, useEffect} from 'react'

export default function Government() {

  const [eGovernment, setEGovernment]= useState([])

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        
      }
    };

    fetch(
      `http://turtkul4.herokuapp.com/about_authority/models/Electronic_Government_Model`, options
    )
      .then((response) => response.json())
      .then((data) => {setEGovernment(data)});
  },[])

  return (
    <>
    <h1>elektron hukumat page</h1>
      {
        <>
          <img src={eGovernment.image} alt="electron government image" />
          <h3>{eGovernment.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: `${eGovernment.body}` }} />
          <time>{eGovernment.date}</time>
        </>
      }
    </>
  )
}
