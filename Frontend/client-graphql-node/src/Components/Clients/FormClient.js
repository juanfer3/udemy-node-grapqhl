import React,  { useState, Fragment } from 'react';
import { Formik, FieldArray, Field  } from 'formik';
import * as Yup from "yup";

import ValidationSchema from '../../Validations/Validations'
import ErrorField from '../Notifications/ErrorField'

import { CREATE_CLIENTS } from '../../Apollo/Mutations'
import { Mutation } from 'react-apollo'

import { 
    ListGroup, 
    Card,
    Button
  } from 'react-bootstrap';


function FormClient(props) {
    const { client } = props
    const validationSchema = ValidationSchema
   
    const mailsInitial = {
        email: ''
    }

    console.log(client)
  return (
    <Formik
        initialValues={{
            name: client ? client.name : "",
            last_name: client ? client.last_name : "",
            emails: client ? client.emails : [mailsInitial],
            age: client ? client.age : "",
            company: client ? client.company : "",
            type_client: client ? client.type_client : "",
        }}

        validationSchema={validationSchema}
        
        onSubmit={(values, { setSubmitting, resetForm }) => {
        
        

        }}
    >
        {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        }) => (


        <Card className="card_shadow">
            <Card.Body>
            <h2>A Great Form</h2>
                <form onSubmit={handleSubmit} className="row">
                    <div className="col-6">
                        <label htmlFor="">Name</label>
                        <input  
                        className={touched.name && errors.name ? "form-control has-error" : 'form-control'}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        />
                    <ErrorField touched={touched.name} message={errors.name} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="">Last Name</label>
                        <input  
                        className={touched.last_name && errors.last_name ? "form-control has-error" : 'form-control'}
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                        />
                        <ErrorField touched={touched.last_name} message={errors.last_name} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="">Age</label>
                        <input  
                        className={touched.age && errors.age ? "form-control has-error" : 'form-control'}
                        type="text"
                        name="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                        />
                        <ErrorField touched={touched.age} message={errors.age} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="">Company</label>
                        <input  
                        className={touched.company && errors.company ? "form-control has-error" : 'form-control'}
                        type="text"
                        name="company"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company}
                        />
                        <ErrorField touched={touched.company} message={errors.company} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="">Type Client</label>

                        <select
                            className={touched.type_client && errors.type_client ? "form-control has-error" : 'form-control'}
                            type="text"
                            name="type_client"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.type_client}
                        >
                            <option
                                value="BASICO"
                            >
                                BASICO
                            </option>
                            <option
                            value="PREMIUN"
                            >
                                PREMIUN
                            </option>
                        </select>
                        <ErrorField touched={touched.type_client} message={errors.type_client} />
                    </div>

                    <div className="col-12">
                        <FieldArray
                            name="emails"
                            render={arrayHelpers => (
                            <div>

                                <div className="input-row">
                                    <Button 
                                        type="button" 
                                        onClick={() => arrayHelpers.push(mailsInitial)}
                                        variant="warning">
                                            Add Emails
                                    </Button>
                                </div>
                                
                                {values.emails && values.emails.length > 0 ? (
                                values.emails.map((email, index) => (
                                    <div key={index} className="row">
                                        <div className="col-9">
                                            <label htmlFor="">Email address</label>
                                            <input 
                                                className={'form-control'}
                                                aria-describedby="emailHelp" 
                                                name={`emails.${index}.email`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={email.email}
                                            />
                                        </div>

                                        <div className="col-3">
                                            <br/>
                                            <Button 
                                                type="button" 
                                                onClick={() => arrayHelpers.remove(index)}
                                                variant="danger">
                                                    Delete
                                            </Button>
                                        </div>
                                    </div>
                                ))
                                ) : (<div></div>)}
                            </div>
                            )}
                        />
                    </div>

                    <div className="col-12">
                        <br></br>
                        <Button 
                            type="submit" 
                            
                            variant="success">
                                Success
                        </Button>
                    </div>

                </form>
            </Card.Body>
        </Card>

    )}
    </Formik>
  );
}

export default FormClient;
