import React from "react";
// import contactSearch from "src/components/ContactList/ContactList.js";
import { Col, Card } from "react-bootstrap";

export default class ContactDetail extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: props.id,
      status: false,
    };
  }
  handleClick() {
    this.setState({ status: true });
  }

  render() {
    const enabled = this.state.status;
    let detail;
    if (enabled) {
      detail = (
        <div>
          <small className="text-gray-custom">
            <i className="fa fa-briefcasepr-1"></i>
            {this.props.designation}
            <br />
          </small>
          <small className="text-gray-custom">
            <i className="fa fa-envelope pr-1"></i>
            {this.props.mail}
            <br />
          </small>
          <small className="text-gray-custom">
            <i className="fa fa-phone pr-1"></i>
            {this.props.phone}
          </small>
        </div>
      );
    } else {
      detail = (
        <div onClick={this.handleClick} className="pointer">
          <i className="fa fa-lock"></i>
        </div>
      );
    }

    return (
      <Col sm={6} md={4} lg={4} className="p-1">
        <Card className="br-custom-left contact-card-height">
          <Card.Body className="p-3">
            <div className="float-left pr-2">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="avatar brround"
              />
            </div>
            <div className="media-body">
              <div className="list-group-item-heading text-default font-weight-semibold">
                {this.props.name}
              </div>
              {detail}
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
