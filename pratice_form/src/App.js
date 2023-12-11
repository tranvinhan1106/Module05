import React, { useState } from "react";
import "./App.css";
import { Formik } from "formik";
//Tao form dang ki 
// export default function App() {
//   const [form, setForm] = useState({});

//   function handleChange(event) {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//   }

//   function handleSubmit() {
//     const isValid =
//       form.username && form.email && form.password && form.confirmPassword;
//     alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
//   }

//   return (
//     <div>
//       <h1>Sign up</h1>
//       <form>
//         <div className="custom-input">
//           <label>Username </label>
//           <input
//             name="username"
//             value={form.username || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="custom-input">
//           <label>Email </label>
//           <input
//             name="email"
//             value={form.email || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="custom-input">
//           <label>Password </label>
//           <input
//             type="password"
//             name="password"
//             value={form.password || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="custom-input">
//           <label>Confirm password </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

//Tao form dang nhap
// export default function App() {
//   const MESSAGE_ERROR = {
//     email: "Email error",
//     password: "Password error"
//   };

//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
//   };

//   const [form, setForm] = useState({});

//   function handleChange(event) {
//     let error = REGEX[event.target.name].test(event.target.value)
//       ? ""
//       : MESSAGE_ERROR[event.target.name];
//     setForm({
//       ...form,
//       [event.target.name]: { value: event.target.value, error: error }
//     });
//   }

//   function handleSubmit() {
//     const isFilled =
//       form.email && form.email.value && form.password && form.password.value;
//     const isError = isFilled && (form.email.error || form.password.error);
//     alert(
//       isFilled && !isError
//         ? "Login in successfully!!!"
//         : "Please fill out all the fields!!!"
//     );
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div
//           className={`custom-input ${form.email &&
//             form.email.error &&
//             "custom-input-error"}`}
//         >
//           <label>Email </label>
//           <input
//             name="email"
//             value={(form.email && form.email.value) || ""}
//             onChange={handleChange}
//           />
//           {form.email && form.email.error && (
//             <p className="error">Email error</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.password &&
//             form.password.error &&
//             "custom-input-error"}`}
//         >
//           <label>Password </label>
//           <input
//             type="password"
//             name="password"
//             value={(form.password && form.password.value) || ""}
//             onChange={handleChange}
//           />
//           {form.password && form.password.error && (
//             <p className="error">Password error</p>
//           )}
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

//Tao form login với Formik
export default function App(){
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };
  const [form , setForm] = useState ({});
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    });
  }
  function handleValidate(){
    const errors = {};
    if(!form.email){
      errors.email = "Required";
    }else if (!REGEX.email.test(form.email)){
      errors.email = "Invalid email address";
      console.log("code");
    }
    if(!form.password){
      errors.password = "required";
    }
    return errors;
  }
  function handleSubmit (){
    alert("Login in successfully!!!");
  }
  return(
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({errors , handleSubmit}) =>(
          <form onsubmit = {handleSubmit}>
            <div className={`custom-input ${errors.email ? "custom-input-error":""}`}>
            <label> Email</label>
            <input type="email" name="email" value={form.email || ""} onChange={handleChange}></input>
            <p className="errors"> {errors.email}</p>
            </div>
            <div
            className={`custom-input ${errors.password ? "custom-input-error":""}`}> 
              <label>Password</label>
              <input type="password" name="password" value={form.password || ""} onChange={handleChange} ></input>
              <p className="error">{errors.password}</p>
            </div>
            <button type="submit"> Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}