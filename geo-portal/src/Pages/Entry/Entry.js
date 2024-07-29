import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapDraw from '../../Components/EntryComponents/MapDraw';
import Txt from '../../Components/EntryComponents/Txt';
import { ColorD,ColorA } from '../../Assets/Colors/Colors';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../../Components/EntryComponents/SignUpButton';


export default function Entry() {
   const Navigate = useNavigate()





    return (
        <>
          
              <div style={{backgroundColor:ColorD}}>

                <Row >
                <MapDraw style={{position:'relative' ,  backgroundSize:'cover'}} />
                    
                  
                    <Col style={{position:'absolute', top:'100px' , marginRight:'50px'}} className='my-5   justify-content-end d-flex' md= {{span:5, offset: 6}} >
                       <div>
                        <Row>
                        <Txt/>
                        </Row>
                        <Row>
                            <Col md={{ span: 4, offset: 7 }} > 
              <SignUpButton/>
                            </Col>
                        </Row>
                       </div>

                      

                       
                    </Col>

                </Row>
              </div>

          

          
        </>
    )
}
