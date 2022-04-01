import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumbs/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";
//import { fr } from "faker/lib/locales";
const initialFrmDt={
  subject:"",
  issueDate: "",
  detail:"",
};
const initialFrmError={
  subject:false,
  issueDate: false,
  detail:false,
}; 
export const AddTicket = () => {
  const [frmData, setFrmData]= useState(initialFrmDt);
  const [frmDataErro, setFrmErro]= useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataErro])

  useEffect(()=>{}, [frmData]); 
  const handleOnChange = (e) => {
    const {name,value} = e.target;
   
    setFrmData({
      ...frmData,
      [name]:value,
    })
    console.log(name,value);

  };
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    
    const isSubjectValid = await shortText(frmData.subject);

     
    setFrmErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log('Form submit req received',frmData);
  } ; 
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="New Ticket" />
          </Col>
        </Row>
  
        <Row>
          <Col>
            <AddTicketForm  handleOnChange={handleOnChange} handleOnSubmit = {handleOnSubmit}
            frmDataErro={frmDataErro}
            frmDt={frmData}/>
          </Col>
        </Row>
      </Container>
    );
  };
  