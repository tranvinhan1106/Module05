import { useState } from 'react';
import './App.css';
import { Formik } from 'formik';
export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const [form, setForm] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };
  function handleValidate() {
    const errors = {};
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }
    if (!form.title) {
      errors.title = "Required";
    }
    if (!form.title) {
      errors.title = "Required";
    }
    return errors;
  }
  function handleSubmit() {
    alert("Login in successfully!!!");
  }
  return (
    <div>
      <h1>Mail form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${errors.title ? "custom-input-error" : ""
                }`}
            >
              <label>Title</label>
              <input
                name="title"
                value={form.title || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.title}</p>
            </div>
            <div
              className={`custom-input ${errors.email ? "custom-input-error" : ""
                }`}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div>
              <label>Message</label>
              <textarea />
            </div>
            <input type='file' ></input>
            <br/>
            <br/>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
