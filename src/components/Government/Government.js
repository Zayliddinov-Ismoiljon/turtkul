import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, {useState, useEffect} from 'react'

import { GovermentStyled } from './Goverment.styles';

export default function Government() {

  const [eGovernment, setEGovernment]= useState([])

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        
      }
    };

    fetch(
      `${BASE_URL}/about_authority/models/Electronic_Government_Model`, options
    )
      .then((response) => response.json())
      .then((data) => {setEGovernment(data)});
  },[])

  return (
    <GovermentStyled>
    <h1 className='govermentTitle'>elektron hukumat</h1>
        <Row gutter={[12,12]}>
          <Col xs={24} sm={6} md={6} lg={6}>
          <img className='goverment-img' src={eGovernment.image} alt="electron government image" />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
          <h3>{eGovernment.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: `${eGovernment.body}` }} />
          </Col>
        </Row>
      
    </GovermentStyled>
  )
}
