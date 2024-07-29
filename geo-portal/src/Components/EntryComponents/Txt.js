import React from 'react'
import Fade from 'react-bootstrap/Fade';
import { ColorA } from '../../Assets/Colors/Colors';
import { ColorC } from '../../Assets/Colors/Colors';
import  './Txt.css'
import SignUpButton from './SignUpButton';


export default function Txt() {
    return (
        <div>

                <div className="box">
                    <h1  style={{color:ColorC, fontSize: '4vw' }}>
                        Locate your business <br></br>
                        on Kuwait maps
                    </h1>

                    <p style={{color:ColorA}}>
                        Manage your google business profile easier and faster <br></br>
                        Better management for your team <br></br>
                        Watch your business rate
                    </p>

                </div>
          
                
        </div>
    )
}
