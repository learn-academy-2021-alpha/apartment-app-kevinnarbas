import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class AptNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        bathrooms: '',
        bedrooms: '',
        city: '',
        email: '',
        manager: '',
        pets: '',
        pic: '',
        price: '',
        state: '',
        street: '',
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewApt(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    const { form, submitted } = this.state;
    return (
      <>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='manager'>Manager name</Label>
                <Input
                  type='text'
                  name='manager'
                  placeholder='Ruby Von Rails'
                  value={form.manager}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='text'
                  name='email'
                  placeholder='Emailhandle@mailer.ext'
                  value={form.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='street'>Address</Label>
            <Input
              type='text'
              name='street'
              placeholder='81800 51st Ave'
              value={form.street}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Row form>
            <Col md={9}>
              <FormGroup>
                <Label for='city'>City</Label>
                <Input
                  type='text'
                  name='city'
                  placeholder='Indio'
                  value={form.city}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for='state'>State</Label>
                <Input
                  type='text'
                  name='state'
                  placeholder='CA'
                  value={form.state}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for='bedrooms'>Bedrooms</Label>
                <Input
                  type='select'
                  name='bedrooms'
                  value={form.bedrooms}
                  onChange={this.handleChange}
                >
                  <option>Pick one:</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for='bathrooms'>Bathrooms</Label>
                <Input
                  type='select'
                  name='bathrooms'
                  value={form.bathrooms}
                  onChange={this.handleChange}
                >
                  <option>Pick one:</option>
                  <option>1</option>
                  <option>1.5</option>
                  <option>2</option>
                  <option>2.5</option>
                  <option>3</option>
                  <option>3.5</option>
                  <option>4</option>
                  <option>4+</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='pets'>Allowed Pets</Label>
                <Input
                  type='text'
                  name='pets'
                  placeholder='1 cat 1 dog'
                  value={form.pets}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for='price'>Price</Label>
                <Input
                  type='text'
                  name='price'
                  placeholder='9999/m or $102,682'
                  value={form.price}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={8}>
              <FormGroup>
                <Label for='pic'>Picture URL</Label>
                <Input
                  type='text'
                  name='pic'
                  placeholder='picture.com/theURLofyourapartmentpicture/goesHere'
                  value={form.pic}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={this.handleSubmit}>Submit New Apartment</Button>
        </Form>
        {submitted && <Redirect to='/aptindex' />}
      </>
    );
  }
}

export default AptNew;
