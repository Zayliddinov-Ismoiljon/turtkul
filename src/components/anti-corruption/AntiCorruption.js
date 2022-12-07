import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { AntiCorruptionStyled } from './AntiCorruption.styles';

export default function AntiCorruption() {
  const [corrupsiya, setCorrupsiya]= useState({})
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        
      }
    };
    fetch(
      `${BASE_URL}/anti_corruption/Anticorruption_News`, options
    )
      .then((response) => response.json())
      .then((data) => {setCorrupsiya(data);});
  }, []);

  return (
    <AntiCorruptionStyled>
      {
        <>
          <h3 className='corruption-title'>{corrupsiya.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: `${corrupsiya.body}` }} />
        </>
      }
    </AntiCorruptionStyled>
  )
}
