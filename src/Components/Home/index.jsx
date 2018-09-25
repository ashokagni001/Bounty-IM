import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";
import Timeline from "../Timeline/ChartForm";
import ChartForm from "./ChartForm";
import "./Home";

class Home extends Component {
  render() {
    return (
      <div className="ui-home">
        <Row>
          <Col md="8">
            <Col md="12">
              <Breadcrumb>
                <BreadcrumbItem active><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Chart</a></BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col md="12">
              <ChartForm />
            </Col>
          </Col>
          <Col md="4" className="padding-right-0">
            <Timeline />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
