import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

class Register extends Component {
  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
          />
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Simple</b>POS
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>

            <Formik
              initialValues={{
                fullname: "",
                email: "",
                password: "",
                confirm_password: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                this.submitForm(values, this.props.history);
                setSubmitting(false);
              }}
              validationSchema={SignupSchema}
            >
              {/* {this.showForm()}            */}
              {(props) => this.showForm(props)}
            </Formik>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    );
  }
}

export default Register;
