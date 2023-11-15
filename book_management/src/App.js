import './App.css';
import React, { useState } from "react";
import { Formik } from "formik";


export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  let errors = {};

  function handleValidate() {
    errors = {};

    if (!form.title) {
      errors.title = 'Required';
    }

    if (!form.number) {
      errors.number = 'Required';
    }

    return errors;
  };

  function handleSelect(book, index) {
    setForm(book);
    setIndexSelected(index);
  };

  function handleDelete(index) {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = (event) => {
      const newBooks = JSON.parse(JSON.stringify(books));

      if (indexSelected > -1) {
        newBooks.splice(indexSelected, 1, form);
      } else {
        newBooks.push(form);
      }

      setBooks(newBooks);
      setForm({});
      setIndexSelected(-1);
    
    return errors;
  };

  return (
    <div>
      <h1>Library</h1>
      <div>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                <label>Title:</label>
                <input
                  name="title"
                  value={form.title || ''}
                  onChange={handleChange} />
                <p className="error">{errors.title}</p>
              </div>
              <div className={`custom-input ${errors.number ? "custom-input-error" : ""}`}>
                <label>Number:</label>
                <input
                  name="number"
                  value={form.number || ''}
                  onChange={handleChange} />
                <p className="error">{errors.number}</p>
              </div>
              <button type="submit">Save</button>
            </form>
          )}
        </Formik>
      </div>
      <br/>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, index) => {
              return <tr key={index}>
                <td>{book.title}</td>
                <td>{book.number}</td>
                <td>
                  <button onClick={() => handleSelect(book, index)}>Edit</button> &nbsp; &nbsp;
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>

    </div>
  );
}


