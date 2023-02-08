import { useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
interface loginResponseType {
    error?: string;
}
const LoginPage = () => {
    const [validated, setValidated] = useState(false);
    const [loginResponse, setLoginResponse] = useState<loginResponseType>()
    const navigate = useNavigate();
    const [formData, setFormData] = useState<any>({ email: '', password: '' });
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() ) {
            setValidated(true);
            callSubmitApi();        
        }

    }
const callSubmitApi = ()=>{
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(response => response.json())
        .then(result => {
            setLoginResponse(result)
            if(result?.token){
            sessionStorage.setItem('auth',result.token);
         navigate('/');
        }
        }).catch(error =>{ 
            console.log(error);
         setLoginResponse({'error':'Opps something wrong...'})});
}


    const handleChange = (event: any) => {
        console.log(event.target.value, event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData[event.target.name]);
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <Card border="warning" className='p-5' >
          {loginResponse?.error && <Alert key={'warning'} variant={'warning'}>
          {loginResponse?.error}
        </Alert>}
                <Card.Title>Login Form</Card.Title>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                name='email'
                                value={formData.email}
                                placeholder="enter an email"
                                onChange={handleChange}
                                required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                name="password"
                                value={formData.password}
                                placeholder="enter a password"
                                onChange={handleChange}
                                 />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body></Card>
        </div>
    );
}

export default LoginPage;