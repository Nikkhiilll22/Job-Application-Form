import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const JobApplicationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      location: "",
      willingToRelocate: "Yes",
      experience: "",
      expectedSalary: "",
      currentOrganisation: "",
      noticePeriod: "",
      currentDesignation: "",
      resume: null,
      agree: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be 10 digits")
        .required("Required"),
      location: Yup.string().required("Required"),
      experience: Yup.number()
        .typeError("Must be a number")
        .min(0, "Invalid value")
        .required("Required"),
      expectedSalary: Yup.number()
        .typeError("Must be a number")
        .required("Required"),
      currentOrganisation: Yup.string().required("Required"),
      noticePeriod: Yup.number()
        .typeError("Must be a number")
        .min(0, "Invalid value")
        .required("Required"),
      currentDesignation: Yup.string().required("Required"),
      agree: Yup.boolean().oneOf(
        [true],
        "You must accept the terms before submitting"
      ),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Job Application Form
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label>Mobile Number</label>
          <input
            name="mobileNumber"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("mobileNumber")}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
          )}
        </div>

        {/* Location */}
        <div className="col-span-2">
          <label>Location</label>
          <input
            name="location"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("location")}
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-red-500 text-sm">{formik.errors.location}</div>
          )}
        </div>

        {/* Willing to Relocate */}
        <div className="col-span-2 flex space-x-6">
          <label>Willing to Relocate</label>
          <label>
            <input
              type="radio"
              name="willingToRelocate"
              value="Yes"
              checked={formik.values.willingToRelocate === "Yes"}
              onChange={formik.handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="willingToRelocate"
              value="No"
              checked={formik.values.willingToRelocate === "No"}
              onChange={formik.handleChange}
            />
            No
          </label>
        </div>

        {/* Experience */}
        <div>
          <label>Experience (Years)</label>
          <input
            name="experience"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("experience")}
          />
          {formik.touched.experience && formik.errors.experience && (
            <div className="text-red-500 text-sm">{formik.errors.experience}</div>
          )}
        </div>

        {/* Expected Salary */}
        <div>
          <label>Expected Salary (₹)</label>
          <input
            name="expectedSalary"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("expectedSalary")}
          />
          {formik.touched.expectedSalary && formik.errors.expectedSalary && (
            <div className="text-red-500 text-sm">{formik.errors.expectedSalary}</div>
          )}
        </div>

        {/* Current Organisation */}
        <div>
          <label>Current Organisation</label>
          <input
            name="currentOrganisation"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("currentOrganisation")}
          />
          {formik.touched.currentOrganisation &&
            formik.errors.currentOrganisation && (
              <div className="text-red-500 text-sm">
                {formik.errors.currentOrganisation}
              </div>
            )}
        </div>

        {/* Notice Period */}
        <div>
          <label>Notice Period (Days)</label>
          <input
            name="noticePeriod"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("noticePeriod")}
          />
          {formik.touched.noticePeriod && formik.errors.noticePeriod && (
            <div className="text-red-500 text-sm">{formik.errors.noticePeriod}</div>
          )}
        </div>

        {/* Designation */}
        <div className="col-span-2">
          <label>Current Designation</label>
          <input
            name="currentDesignation"
            type="text"
            className="w-full border rounded p-2"
            {...formik.getFieldProps("currentDesignation")}
          />
          {formik.touched.currentDesignation &&
            formik.errors.currentDesignation && (
              <div className="text-red-500 text-sm">
                {formik.errors.currentDesignation}
              </div>
            )}
        </div>

        {/* Resume Upload */}
        <div className="col-span-2">
          <label className="block font-medium mb-1">Upload Resume</label>
          <input
            name="resume"
            type="file"
            className="w-full border p-2 rounded"
            onChange={(event) =>
              formik.setFieldValue("resume", event.currentTarget.files[0])
            }
          />
        </div>
      </div>

      {/* Terms */}
      <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formik.values.agree}
            onChange={formik.handleChange}
          />{" "}
          I understand that any false or misleading information may disqualify me from consideration or, if employed, may lead to termination.
        </label>
        {formik.touched.agree && formik.errors.agree && (
          <div className="text-red-500 text-sm">{formik.errors.agree}</div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        Apply Now
      </button>
    </form>
  );
};

export default JobApplicationForm;
