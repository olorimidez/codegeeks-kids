import React from 'react'
import Image from 'next/image'
import bg_img from '../../../public/assets/bg-2.png'
import girl from '../../../public/assets/registerpage-section-img.png'
import styles from '../../app/register/Page.module.css'
// import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import { Container, Row, Col, Form } from 'react-bootstrap'

const Register = () => {

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validatePhone = /^[\+][0-9]{5,10}$/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Enter your name")
      .max(20, "must not be more than 20 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
    phone: yup
      .string()
      .required("Number is required")
      .matches(validatePhone, "Incorrect phone number."),
  });

  const handleSubmission = (values) => {
    console.log("Your enetered data:", values);
  };
  return (
    <>
    <div className="container-fluid">
          <Image
            src={bg_img}
            alt='bg'
            fill={true}
            // layout='fill'
            className={styles.bg_register}
          />
    </div>
    <div className="container-fluid bg-danger ">
           <Image
              src={girl}
              alt='girl img'
              height={500}
              width={300}
            />
      <Container>
        {/* <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmission}
        > */}
            {({ values, handleBlur, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            className="mb-2 border border-dashed"
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Enter your email"
                          />

                          <ErrorMessage
                            name="email"
                            component="span"
                            className="error text-danger"
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridFullName">
                          <Form.Label>FullName</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter FullName"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}                     
                          />
                      
                          <ErrorMessage
                            name="name"
                            component="span"
                            className="error text-danger"
                          />
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          xs={12}
                          md={6}
                          controlId="formGridNumber"
                        >
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            className="mb-2"
                            type="number"
                            placeholder="+234 0900 333 444"
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.phone}
                          />
              
                          <ErrorMessage
                            name="phone"
                            component="span"
                            className="error text-danger"
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCourse">
                          <Form.Label>Course</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Course</option>
                            <option value="1">FullStack Web</option>
                            <option value="2">FrontEnd Web</option>
                            <option value="3">BackEnd Web</option>
                            <option value="4">FullStack Mobile</option>
                            <option value="5">FrontEnd Mobile (React Native)</option>
                            <option value="6">FrontEnd Mobile (Flutter)</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          xs={12}
                          md={6}
                          controlId="formGridTraining"
                        >
                          <Form.Label>Training Medium</Form.Label>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Virtual"
                            disabled
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridClass">
                          <Form.Label>Preffered Class</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Class Period</option>
                            <option value="1">Weekends</option>
                            <option value="2">Weekdays</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Leave a comment (optional)</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Row>

                      <div className="text-center">
                        <input type="submit" className={styles.butt_sub} />
                      </div>
                    </Form>
               )}
        
        {/* </Formik> */}
      </Container>
    </div>
    </>
  )
}

export default Register