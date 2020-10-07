import React from 'react'
import { Card, Form, Container, Col, FormLabel} from 'react-bootstrap'


const AddProfile = (props) => {

const [formData ={ name:null}, updateFormData] = React.useState(props.newProfile)

const handleChange = (e) => {
    updateFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

const onSubmitForm = (e) => {    
    e.preventDefault();
    alert("Created by: Crissy")
}

if(formData.name===null){
    return (
        <Container style={{padding:"24px"}}>
            <Card style={{padding:"24px", width: "18em"}}>
                <Col md="2">
                    <Form onSubmit = {onSubmitForm}  data-testid="form">
                        <FormLabel> Name: </FormLabel>
                        <input type="text" alt="name" name="name" onChange={handleChange} value={formData.name} />
                        
                        <FormLabel> Title: </FormLabel>
                        <input type="text" alt="title" name="title" onChange={handleChange} value={formData.title} />

                        <FormLabel> Description: </FormLabel>
                        <input type="textarea" alt="description" name="description" onChange={handleChange} value={formData.description} />

                        <button style={{marginTop:"15px"}} type="submit"> Submit </button>
                    </Form>
                </Col>
            </Card>
        </Container> 
    )
} 
else 
{
    return (
        <Container style={{padding:"24px"}}>
        <Card style={{padding:"24px", width: "18em"}}>
            <Col md="2">
                <Form onSubmit = {onSubmitForm}  data-testid="form">
                    <FormLabel> Name: </FormLabel>
                    <input type="text" name="name" onChange={handleChange} value={formData.name} />
                    
                    <FormLabel> Title: </FormLabel>
                    <input type="text" name="title" onChange={handleChange} value={formData.title} />

                    <FormLabel> Description: </FormLabel>
                    <input type="textarea" name="description" onChange={handleChange} value={formData.description} />

                    <button style={{marginTop:"15px"}} type="submit"> Submit </button>
                </Form>
            </Col>
        </Card>
        <Card style={{padding:"24px", width: "18em"}}>
            <p>
                Hello {formData.name}! <br></br>
            </p>
            <span>
            Don't forget to submit the form.
            </span>
        </Card>
    </Container> 
    )
}
}

export default AddProfile