import React from 'react'
import PropTypes from "prop-types";
import {
	Container,
	Row,
	Col,
	Form,
    Button
	
} from "react-bootstrap";

export const ResetPassword = ({handleOnchange,handleOnResetSubmit,email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">User login</h1>
            <hr/>
            <Form  autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onSubmit = {handleOnResetSubmit}
								onChange= {handleOnchange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						
                        
                        <Button type="submit" style={{marginTop:"19px"}}>Send Email</Button>
					
            </Form>
            </Col>
        </Row>
		<hr/>
		<Row>
				<Col>
					<a href="#!">Retry </a>
				</Col>
			</Row>
    </Container>
  )
}
ResetPassword.propTypes = {
	handleOnchange: PropTypes.func.isRequired,
	

	handleOnResetSubmit: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	
};