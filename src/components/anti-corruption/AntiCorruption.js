import React, { useEffect, useState } from 'react'

export default function AntiCorruption() {
  const [corrupsiya, setCorrupsiya]= useState({})
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        
      }
    };

    fetch(
      `https://turtkul4.herokuapp.com/anti_corruption/Anticorruption_News`, options
    )
      .then((response) => response.json())
      .then((data) => {setCorrupsiya(data);});
  }, []);

  return (
    <>
    <h1>Aksil corrupsiya page</h1>
      {
        <>
          <h3>{corrupsiya.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: `${corrupsiya.body}` }} />
          <time>{corrupsiya.date}</time>
        </>
      }
    </>
  )
}
