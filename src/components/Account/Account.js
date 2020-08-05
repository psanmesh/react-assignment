import React from "react";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";

export default class Account extends React.Component {
  state = {
    companyData: {
      companyName: "Abb Ltd",
      address: "Lorem Ipsum is simply dummy text.",
      website: "companyurl.com",
      phone: "+41-11111111",
      ownership: "Cooperation",
      linkedinUrl: "http:linkedin.com/company/Abb",
      parentCompany: "Abb",
      primaryIndustry: "Lorem Ipsum is simply dummy text.",
      revenue: "$1B+",
      employeeSize: "10,000+",
      sic: "Lorem Ipsum is simply dummy text.",
      naics: "Lorem Ipsum is simply dummy text.",
      allIndustry: "Lorem Ipsum is simply dummy text.",
      allSic: "Lorem Ipsum is simply dummy text.",
    },
  };
  render() {
    return (
      <Card className="card-custom-border">
        <Card.Header className="card-header-custom">
          Account Details
          <div className="card-options">
            <Button variant="outline-dark" size="sm" className="mr-2" disabled>
              Update
            </Button>
            <Button variant="outline-dark" size="sm">
              FeedBack
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Row>
                <Col sm={6} md={3} lg={3} className="vl">
                  <div className="ms-user clearfix">
                    <img
                      src="https://picsum.photos/200"
                      alt="Company logo"
                      className=" brround float-left mr-2"
                    />
                    <div>
                      <strong>{this.state.companyData.companyName}</strong>
                      <br />
                      <small className="text-gray-custom">
                        {this.state.companyData.address}
                      </small>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={3} lg={3}>
                  <div className=" clearfix">
                    <a href="/">{this.state.companyData.website}</a>
                    <br />
                    <small className="text-gray-custom">
                      {this.state.companyData.phone}
                    </small>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Company Name</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.companyName}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Address</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.address}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Phone</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.phone}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Website</p>
                  <p className="m-0 text-list-value">
                    <a href="/">{this.state.companyData.website}</a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Ownership</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.ownership}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Linkedin Url</p>
                  <p className="m-0 text-list-value">
                    <a href="/">{this.state.companyData.linkedinUrl}</a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Parent Company</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.parentCompany}
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Primary Industry</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.primaryIndustry}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Revenue</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.revenue}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">Employee Size</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.employeeSize}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">SIC</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.sic}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">NAICS</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.naics}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">All Industry</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.allIndustry}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="m-0 text-list-header">All SIC</p>
                  <p className="m-0 text-list-value">
                    {this.state.companyData.allSic}
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
