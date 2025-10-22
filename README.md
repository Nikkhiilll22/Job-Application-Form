# 🧾 React Form Project — Formik & Yup Validation

This project is a simple and efficient **React form** application built using **Formik** and **Yup**.  
It demonstrates how to create, manage, and validate forms in React with ease and scalability.

---

## 🚀 Project Overview

This project focuses on handling form state, validation, and error management using **Formik** and **Yup** — two powerful libraries widely used in modern React development.

**Key Features:**
- Easy and scalable form state management with **Formik**
- Real-time validation with **Yup**
- Clean and reusable input handling
- Error messages and validation feedback
- TailwindCSS styling for responsive design

---

## 💡 Use Cases

This project is useful for:
- Developers learning how to handle **forms in React**
- Creating **login, registration, or feedback forms**
- Demonstrating **client-side validation best practices**
- Building **data entry or survey applications**

---

## ⚙️ Libraries Used

### **Formik**
Formik simplifies form management in React by handling:
- Form state (`values`, `touched`, `errors`)
- Change handlers and submissions
- Integration with validation libraries like Yup

**Example:**
```jsx
<Formik
  initialValues={{ name: '', email: '' }}
  onSubmit={(values) => console.log(values)}
>
  {({ handleChange, handleSubmit, values }) => (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={values.name} />
      <input name="email" onChange={handleChange} value={values.email} />
      <button type="submit">Submit</button>
    </form>
  )}
</Formik>
```

### 🧰 Yup Validation

**Yup** is a schema-based validation library used with **Formik** to define validation rules.

#### 📘 Example Validation Schema
```jsx
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

Yup ensures that form data is validated before submission, preventing incomplete or incorrect entries.
```

🧠 How It Works

-Formik manages all form inputs and state.
-Yup validates each field based on rules you define.
-✅ If all validations pass → the data is submitted.
-❌ If validations fail → errors are shown below respective fields.


