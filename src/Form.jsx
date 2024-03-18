import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
  import flex from './Images/Flexformlogin.png'
  import { useState } from 'react';



  const MyForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
   
    const handleSubmit = (e) => {
      e.preventDefault();
        setEmailError("");
        setPasswordError("");
      const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
   
      if (!passwordPattern.test(password)) {
        setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
        return;
      }
        
      alert("The email address and password are " + email + " and " + password + " respectively.");
    };
    return (
      
      <div className=''> 
        <img src={flex} alt="flex" className='d-flex justify-content-center flex m-4'/>
        
        <Form onSubmit={handleSubmit} autocomplete="off"className="form Main mx-auto ">
          <FormGroup>
            <Label for="exampleEmail" className='d-flex justify-content-center p-4 acct'>Log in to your account</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email Address"
              className='p-2 input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              className='p-2 input'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>
            <a href='#forgot-password' className='forgot mb-1'>
              <h6 >
                  Forgot your password? 
              </h6>
            </a>
        <Button className='login-btn d-flex justify-content-center col-sm-12 p-2'>LOG IN</Button>
      </Form>
      
      <p className=' ms-4 d-flex justify-content-center text-muted text-center'>
          Don't have an account?
          <a href="#sign-up" className='forgot'>  Create an account</a>
      </p>
            <p className='ms-4 final-para d-flex justify-content-center mt-3 text-muted text-center'>
            © 2024 Flex Financial Technologies ltd
            </p>
      </div>
      
  );
};

export default MyForm;