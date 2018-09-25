import React, {Component} from "react";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "./Home";

class ChartForm extends Component {
  render() {
    return (
      <div className="ui-chart-form">
        <Container>
          <Row>
            <Col md="2" />
            <Col md="8">
              <Form>
                <FormGroup className="chart-input">
                  <Label
                    className="form-label"
                    for="name">
                    Name
                  </Label>
                  <p className="form-notification">
                    Give a name for the chart
                  </p>
                  <Input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                  />
                </FormGroup>
                <Row>
                  <Col md="12">
                    <p className="form-label">Is the chart active?</p>
                    <p className="form-notification">Is the chart active?</p>
                  </Col>
                  <Col md="6">
                    <Button color="primary" size="lg" block>Yes</Button>
                  </Col>
                  <Col md="6">
                    <Button color="secondary" size="lg" block>No</Button>                    
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default ChartForm;
