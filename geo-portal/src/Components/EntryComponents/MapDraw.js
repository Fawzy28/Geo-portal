import React from 'react'
import map from "../../Assets/Images/map.png";
import Image from 'react-bootstrap/esm/Image';
import Collapse from 'react-bootstrap/esm/Collapse';

export default function mapDraw() {
  return (
    <>
     <Collapse in={true}  dimension="width" timeout='3000'>
    <Image src={map} style={{maxWidth:'1000px' ,backgroundSize:'cover' }}>
    </Image>   
     </Collapse>
    </>
  )
}

