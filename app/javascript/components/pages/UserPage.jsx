import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from 'reactstrap';

class UserPage extends Component {
  render() {
    const { current_user, apts } = this.props;
    return (
      <>
        <h1>Hello {current_user.email.split('@')[0]}</h1>
        <Row sm='4'>
          {apts.map((apt) => {
            return (
              <Col key={apt.id} sm='6'>
                <Card>
                  <CardImg
                    top
                    width='100%'
                    src={apt.pic}
                    alt='Card image cap'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>{apt.street}</CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>
                      {apt.city}, {apt.state}
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <NavLink to={`/aptshow/${apt.id}`}>
                      Apartment Details &nbsp;
                    </NavLink>
                    <NavLink to={'/'}>Edit Apartment</NavLink>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default UserPage;
