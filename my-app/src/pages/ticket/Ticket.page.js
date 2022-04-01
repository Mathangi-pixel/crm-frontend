import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumbs/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
const ticket = tickets[0]
export const Ticket = () => {
  return (
<Container>
    <Row>
    <Col>
    <PageBreadcrumb page = "Ticket"/>
    </Col>
    </Row>
    <Row>
    <Col className ="text-weight-bolder text-secondary">
    <div className='subject'>subject:{ticket.subject}</div>
    <div className='date'>subject:{ticket.addedAt}</div>
    <div className='status'>subject:{ticket.status}</div>
    </Col>
    <Col className='text-right'>
    <Button variant = "outline-info" >Close Ticket </Button>
    </Col>
    </Row>
    </Container>
  )
}

