import { useRef, useState } from "react"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from "react-bootstrap/esm/Container";
import { ColorB, ColorC, ColorD } from "../../Assets/Colors/Colors";
import { Paper } from "@mui/material";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";




export default function Register1 () {

    const [formControl, setFormControl] = useState(
        {
         
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
            userType:""

        }
    )

    const [formErrorsControl, setFormErrorsControl] = useState(
        {
         
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
            userType:""

        }
    )


    //   for more dynamic
    const handleInputChanging = (e) => {
        for (const key in formControl) {
            if (e.target.name == key)
                 { setFormControl({ ...formControl, [e.target.name]: e.target.value }) }
        }  
        handleError(e.target.name, e.target.value)

        
        console.log(formControl)
        console.log(formErrorsControl)
    }

    
    const handleError = (key, value) => {
        switch (key) {
            case 'email':
                setFormErrorsControl({ ...formErrorsControl, email: value.length == 0 ? 'required' : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? "" : "please enter avalid email" })
                break;
            case 'userName':
                setFormErrorsControl({ ...formErrorsControl, userName: value.length == 0 ? 'required' : value.includes(" ") ? "Invalid Username" : "" })
                break;
            case 'password':
                setFormErrorsControl({ ...formErrorsControl, password: value.length == 0 ? 'required' : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/g.test(value) ? "" : "please enter avalid password" })
                break;
            case 'confirmPassword':
                setFormErrorsControl({ ...formErrorsControl, confirmPassword: (value === formControl.password) ? "" : "please try to enter your password again" })
                break;
            case 'confirmPassword':
                setFormErrorsControl({ ...formErrorsControl, confirmPassword: (value === formControl.password) ? "" : "please try to enter your password again" })
                break;
            default:
                break;


        }
    }




    const nullValuesArr = Object.values(formControl).filter(element => { return (element == "") })
    const errorsArr = Object.values(formErrorsControl).filter(element => { return (element.length > 0) })




    //stepper


    const steps = [
        'Entering your information',
        'Authentication with Google Account',
        'Accepting Terms and Policies',
      ];










    return (
        <div style={{backgroundColor:ColorD}}>

         <Box className='py-4' sx={{ width: '100%' }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

    <Container >
<Row>

<Col md={{ span: 6, offset: 3 }}>
    <Paper style={{padding:'30px' , maxWidth:'720px' , borderRadius:'15px' , opacity:'0.9'}} >
            <form style={{maxWidth:'700px'}} className="container my-4" onSubmit={(e) => e.preventDefault()}  >

                <div className="mb-3 my-3">
                    <label for="exampleFormControlInput1" className="form-label" style={{fontSize:'20px'}}>Email address</label>
                    <input    style={{borderBlockWidth :'2px' , borderBlockColor:(formErrorsControl.email)?'#b31717': (formControl.email.length)&&'green'}}      type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.email && <p style={{fontSize:'15px'}} className="text-danger" >{formErrorsControl.email}</p>
                    }
                </div>

                <div className="my-3">
                    <label for="inputUsername" className="form-label " style={{fontSize:'20px'}}>User Name</label>
                    <input   style={{borderBlockWidth :'2px' , borderBlockColor:formErrorsControl.userName?'#b31717': (formControl.userName.length)&&'green'}}    type="text" id="inputUsername" className="form-control " name="userName"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.userName && <p style={{fontSize:'15px'}} className="text-danger" >{formErrorsControl.userName}</p>}
                    <div id="usernameHelpBlock" className="form-text">
                        it musn't contains any spaces
                    </div>
                </div>


                <div className="my-3">
                    <label for="inputPassword5" className="form-label " style={{fontSize:'20px'}}>Password</label>
                    <input   style={{ borderBlockWidth :'2px' ,borderBlockColor:formErrorsControl.password?'#b31717': (formControl.password.length)&&'green'}} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="password"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.password && <p style={{fontSize:'15px'}} className="text-danger" >{formErrorsControl.password}</p>}
                    <div id="passwordHelpBlock" className="form-text ">
                        password length not less than 8
                        characters, contains at least one lowercase, one
                        uppercase, at least one digit and special character
                    </div>
                </div>


                <div className="my-3">
                    <label for="confirmPassword5" className="form-label " style={{fontSize:'20px'}}>Confirm Password</label>
                    <input  style={{borderBlockWidth :'2px' , borderBlockColor : formErrorsControl.confirmPassword?'#b31717' : (formControl.confirmPassword.length)&&'green' }} type="password" id="confirmPassword" className="form-control" name="confirmPassword"  onChange={(e)=>handleInputChanging(e)} ></input>
                    {formErrorsControl.confirmPassword && <p style={{fontSize:'15px'}} className="text-danger" >{formErrorsControl.confirmPassword}</p>  }
                    <div id="passwordHelpBlock" className="form-text ">
                        the two passwords must be identical
                    </div>
                </div>



                <div className="my-4" style={{textAlign:'center'}}>
 <FormControl>


      <FormLabel id="demo-row-radio-buttons-group-label">Why are you creating this account ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="userType"
        onInput={(e)=>handleInputChanging(e)}
        >
        <FormControlLabel name="userType" value="personal" control={<Radio />} label="Personal Use" />
        <FormControlLabel name="userType" value="business" control={<Radio />} label="Business Management" />
      </RadioGroup>


    </FormControl>
    </div>

      <div style={{textAlign:'center'}}>

          {(nullValuesArr.length > 0 || errorsArr.length > 0) ? <button style={{fontSize:'20px' , borderRadius:'15px'}} disabled type="submit" className="btn btn-primary my-3">Complete Registration</button> : 
           <button  style={{fontSize:'20px' , borderRadius:'15px'}} type="submit" className="btn btn-primary my-3">Complete Registration 
               <svg style={{fill:'white' , width:'20px'}} className='icon  mx-2'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
           </button>}

      </div>

            </form>
            </Paper>
</Col>
</Row>
    </Container>

        </div>

    )

}












