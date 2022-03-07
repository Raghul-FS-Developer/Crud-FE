import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
function EditStudent() {
  useEffect(() => {
    {
      if (params.id) {
        getData();
      }
    }
  }, []);

  let navigate = useNavigate();
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      degree: "",
      dept: "",
    },
    onSubmit(values) {
      // Do stuff here...
      handleSave(values);
    },
    validationSchema: yup.object({
      name: yup.string().required("required"),
      email: yup.string().email("invalid email").required("required"),
      mobile: yup
        .string()
        .matches(/^\d{10}$/, "mobile number invalid")
        .required("required"),
      degree: yup.string(),
      dept: yup.string(),
    }),
  });
  // putting data using axios

  let handleSave = async (data) => {
    await axios.put(
      "https://614eacd3b4f6d30017b48344.mockapi.io/user/" + params.id,
      data
    );
    navigate("/all-students");
  };

  //to get the data of specific ID
  let getData = async () => {
    let res = await axios.get(
      "https://614eacd3b4f6d30017b48344.mockapi.io/user/" + params.id
    );
    console.log(res.data);

    try {
      formik.setFieldValue("name", res.data.name);
      formik.setFieldValue("email", res.data.email);
      formik.setFieldValue("mobile", res.data.mobile);
      formik.setFieldValue("degree", res.data.degree);
      formik.setFieldValue("dept", res.data.dept);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="margin">
      <h1>Edit Student</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          className="form-control"
          placeholder="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="mobile"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.mobile}
          className="form-control"
          placeholder="mobile"
        />
        {formik.touched.mobile && formik.errors.mobile ? (
          <div style={{ color: "red" }}>{formik.errors.mobile}</div>
        ) : null}
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          name="degree"
          type="degree"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.degree}
          className="form-control"
          placeholder="degree"
        />
        {formik.touched.degree && formik.errors.degree ? (
          <div style={{ color: "red" }}>{formik.errors.degree}</div>
        ) : null}
        <label htmlFor="dept">Department</label>
        <input
          id="dept"
          name="dept"
          type="dept"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.dept}
          className="form-control"
          placeholder="dept"
        />
        {formik.touched.dept && formik.errors.dept ? (
          <div style={{ color: "red" }}>{formik.errors.dept}</div>
        ) : null}
        ,
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
