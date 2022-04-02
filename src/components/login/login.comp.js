import React from 'react'
import PropTypes from "prop-types";
import {
	Container,
	Row,
	Col,
	Form,
    Button
	
} from "react-bootstrap";

export const LoginForm = ({handleOnchange,handleOnSubmit,email,pass,formSwitcher,rest}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">User Login</h1>
            <hr/>
            <Form  autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onSubmit = {handleOnSubmit}
								onChange= {handleOnchange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={pass}
								onSubmit = {handleOnSubmit}
								onChange= {handleOnchange}
								placeholder="password"
								required
								
							/>
						</Form.Group>
                        
						<Button type="submit" style={{marginTop:"19px"}}>Login</Button>
						
                        
					
            </Form>
            </Col>
        </Row>
		<hr/>
		<Row>
				<Col>
					<a href="#!" onClick={()=>formSwitcher("rest")}>Forget Password?</a>
				</Col>
			</Row>
    </Container>
  )
}
LoginForm.propTypes = {
	handleOnchange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
};