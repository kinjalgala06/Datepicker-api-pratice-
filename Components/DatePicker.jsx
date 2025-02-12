import Button from 'react-bootstrap/Button';
import {Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const DatePicker=({onDataChange})=>{
    const[form,setForm]=useState({from:"",to:""})
    const updateDate=(field,value)=>{
        if(!value){
            return;
        }
        setForm({
            ...form,
            [field]:value,
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        // alert(form.from+form.to)
        onDataChange(form.from,form.to)
    }
    return(
        <Form>
            <Row>
               <Col>
                    <Form.Group className="mb-3" >
                            <Form.Label>From Date</Form.Label>
                            <Form.Control type='date' placeholder='From Date' 
                            onChange={(e)=>updateDate("from",e.target.value)}>

                            </Form.Control>
                    </Form.Group>
               </Col>
               <Col>
                    <Form.Group className="mb-3" >
                            <Form.Label>To Date</Form.Label>
                            <Form.Control type='date' placeholder='To Date'
                            onChange={(e)=>updateDate("to",e.target.value)}>

                            </Form.Control>
                    </Form.Group>
               </Col>
            </Row>
            <Row>
                <Col xs={12} >
                    <Button variant='primary' type='submit' onClick={onSubmit}>Sumbit</Button>
                
                </Col>
            </Row>
        </Form>
    );
};

export default DatePicker