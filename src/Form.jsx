import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import flex from './Images/Flexformlogin.png'

function MyForm() {

    return (
      
      <div className=''> 
        <img src={flex} alt="flex" className='d-flex justify-content-center flex m-4'/>
        
        <Form className="form Main mx-auto my-5">
          <FormGroup>
            <Label for="exampleEmail" className='d-flex justify-content-center p-4 acct'>Log in to your account</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email Address"
              className='p-2 input'
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
            />
          </FormGroup>
            <a href='#forgot-password' className='forgot mb-1'>
              <h6 >
                  Forgot your password? 
              </h6>
            </a>
        <Button className='login-btn d-flex justify-content-center col-sm-12 p-2'>LOG IN</Button>
      </Form>
      
      <p className=' ms-4 d-flex justify-content-center text-muted'>
          Don't have an account?
          <a href="#sign-up" className='forgot'>  Create an account</a>
      </p>
            <p className='ms-4 final-para d-flex justify-content-center mt-3 text-muted'>
            © 2024 Flex Financial Technologies ltd
            </p>
      </div>
      
  );
}

export default MyForm;