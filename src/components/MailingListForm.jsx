import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const MailingListForm = () => (
  <Container>
    <Row>
      <Col>
        <Jumbotron className="bg-secondary text-white">
          <div className="row gutter-2 align-items-center">
            <Col md={6} xs={12}>
              <h3>Get on our mailing list, save the world!</h3>
            </Col>
            <Col xs={12} md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Control
                      inline
                      type="email"
                      placeholder="Enter email"
                    />
                    <Button
                      inline
                      type="submit"
                      style={{ marginLeft: '0.5rem' }}
                    >
                      Subscribe
                    </Button>
                  </div>
                  <Form.Text className="text-white">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default MailingListForm;
