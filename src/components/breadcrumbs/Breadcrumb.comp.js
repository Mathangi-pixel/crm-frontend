import React from "react";
import { Breadcrumb } from "react-bootstrap";


export const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb>
      {/* <LinkContainer to="/"> */}
        <Breadcrumb.Item href ="/">Home</Breadcrumb.Item>
      {/* </LinkContainer> */}
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
    //sripriya
  );
};