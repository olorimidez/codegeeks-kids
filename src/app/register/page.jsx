"use client"
import React from 'react'
import Image from 'next/image'
import bg_img from '../../../public/assets/bg-2.png'
import girl from '../../../public/assets/registerpage-section-img.png'
import styles from '../../app/register/Page.module.css'
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };
  
  const validatePhone = /^[\+][0-9]{5,10}$/;
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Enter your Fullname')
      .max(50, 'must not be more than 10 characters long'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    phone: yup.string().matches(validatePhone, 'Incorrect phone number.').required('Phone Number is required'),
  });
  
  const handleSubmission = (values) => {
    console.log('Your entered data:', values);
  };

  return (
    <>
    <div className="container-fluid">
          <Image
            src={bg_img}
            alt='bg'
            fill={true}
            className={styles.bg_register}
          />
    </div>
    <div className={`container-fluid  ${styles.bg_main}`}>

        <div className={`container ${styles.bg_main}`}>
                  <div className="text-center text-white pt-4">
                    <h4>REGISTER</h4>
                    <p>Get Started By Registering For The Course</p>
                  </div>
                <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-4">
                          <Image
                          src={girl}
                          alt='girl img'
                          height={500}
                          width={300}
                        />
                      </div>
                      <div className={`col-sm-12 col-md-6 col-lg-8 gy-5 mb-5 ${styles.bg_form}`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmission}
          > 
            {({ values, handleBlur, handleChange, handleSubmit,  }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="form-group">
                              <label for="fullname" className="text-white mt-4">FullName:</label>
                              <input type="text"
                              name="name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.name}
                              className={`form-control bg-transparent ${styles.dashed}`} id="exampleFormControlInput1" placeholder="Enter your fullname"/>
                           </div>
                           <ErrorMessage name="name" component="span" className="error text-danger" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-6">
                                <div className="form-group">
                                  <label for="email" className="text-white mt-4">Email:</label>
                                  <input type="email"
                                  name="email"
                                   onBlur={handleBlur}
                                   onChange={handleChange}
                                   value={values.email}
                                   className={`form-control bg-transparent ${styles.dashed}`} id="exampleFormControlInput1" placeholder="name@example.com"/> 
                              </div>
                              <ErrorMessage name="email" component="span" className="error text-danger" />
                            </div>
                          </div>
                          <div className="row">
                          
                            <div className="col-sm-12 col-md-6 col-xl-6">
                              <div className="form-group">
                                <label for="number" className="text-white mt-4">Phone Number:</label>
                                <input type="tel" 
                                 name="phone"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.phone}
                                 className={`form-control bg-transparent ${styles.dashed}`} id="exampleFormControlInput1" placeholder="+234 0900 333 4444"/> 
                              </div>
                              <ErrorMessage name="phone" component="span" className="error text-danger" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-6">
                                <div className="form-group">
                                  <label for="location" className="text-white mt-4">Location:</label>
                                    <select className={`form-select text-white bg-transparent ${styles.dashed}`} aria-label="Default select example">
                                        <option selected>Select Country</option>
                                        <option value="1">Nigeria</option>
                                        <option value="2">UK</option>
                                        <option value="3">Dubia</option>
                                    </select>
                                </div>
                              </div>
                          </div>
                          <div className="row">
                            
                              <div className="col-sm-12 col-md-6 col-xl-6">
                                <div className="form-group">
                                  <label for="starting" className="text-white mt-4">Starting With:</label>
                                    <select className={`form-select text-white bg-transparent ${styles.dashed}`} aria-label="Default select example">
                                        <option selected>Holiday Type</option>
                                        <option value="1">Easter Holiday</option>
                                        <option value="2">Summer Break</option>
                                    </select>
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-6 col-xl-6">
                              <div className="form-group">
                                  <label for="about" className="text-white mt-4">How did you  hear about us? :</label>
                                    <select className={`form-select text-white bg-transparent ${styles.dashed}`} aria-label="Default select example">
                                        <option selected>Social Media</option>
                                        <option value="1">Through a Friend/Family</option>
                                
                                    </select>
                              </div>
                              </div>
                          </div>
                          <div className="row">
                            <div className="form-group">
                                <label for="textarea" className='text-white mt-4'>Leave a comment here</label>
                                <textarea name="textarea" className={`bg-transparent text-white  ${styles.dashed}`} placeholder='Optional...' cols="55" rows="5"></textarea>  
                            </div>
                          </div>

                        <div className="text-center mt-5">
                            <input type="submit" className={styles.butt_sub} />
                        </div>
                        </form>
              )}
          </Formik>
                      </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Register