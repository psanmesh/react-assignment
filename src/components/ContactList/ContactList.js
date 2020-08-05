import React from "react";
import ContactDetail from "./ContactDetail";
// import contactSearch from "src/components/ContactList/ContactList.js";
import { Row, Col, Card, Form } from "react-bootstrap";

let list = [
  {
    name: "Demo A",
    designation: "Engineer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person b",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person c",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person d",
    designation: "Sale",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person e",
    designation: "Sale",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Demo B",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person b",
    designation: "Sale",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person c",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person d",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person e",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person A",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person b",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person c",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person d",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person e",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person A",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person b",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person c",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person d",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
  {
    name: "Person e",
    designation: "Developer",
    phone: "+91-111111111",
    mail: "demo@twst.abb",
  },
];
export default class ContactList extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: list,
      result: list,
    };
    this.filterList = this.filterList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users,
    });
  }
  filterList(event) {
    let value = event.target.value;
    let users = this.state.contact,
      result = [];
    result = users.filter((user) => {
      return (
        user.name.toLowerCase().search(value) !== -1 ||
        user.designation.toLowerCase().search(value) !== -1
      );
    });
    this.setState({ result });
  }

  render() {
    return (
      <Card className="card-custom-border">
        <Card.Header className="card-header-custom">
          Contact ({this.state.result.length})
          <div className="card-options">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={this.filterList}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Row>
                {this.state.result.map((data, i) => (
                  <ContactDetail
                    key={i}
                    name={data.name}
                    designation={data.designation}
                    phone={data.phone}
                    mail={data.mail}
                    id={i}
                  />
                ))}
                <ContactDetail />
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
