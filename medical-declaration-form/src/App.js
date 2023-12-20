import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

function App() {
  const [form, setForm] = useState({
    name: "",
    code: "",
    birthday: "",
    gender: "0",
    national: "",
    company: "",
    city: "",
    status: "",
    quarter: "",
    district: "",
    wards: "",
    house: "",
    phone: "",
    email: "",
  });

  const handleValidation = () => {
    const validate = yup.object({
      name: yup.string().required(),
      code: yup.string().required(),
      birthday: yup.number().required().min(1900),
      national: yup.string().required(),
      city: yup.string().required(),
      district: yup.string().required(),
      wards: yup.string().required(),
      house: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().required().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    });
    return validate;
  };

  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Tờ khai y tế</h1>
      <Formik initialValues={form} validationSchema={handleValidation} onSubmit={handleSubmit}>
        <Form>
          <div className='mb-3'>
            <label  className="form-label">Họ tên</label>
            <br />
            <Field name="name" className='form-control'/>
            <ErrorMessage name="name" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Số hộ chiếu /CMND</label>
            <br />
            <Field name="code" className='form-control'/>
            <ErrorMessage name="code" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Năm sinh</label>
            <br />
            <Field name="birthday"className='form-control' />
            <ErrorMessage name="birthday" component="p" />
          </div >
          <br />
          <div className='mb-3'>
            <label  className="form-label">Giới tính</label>
            <br />
            <Field type="radio" name="gender" value="0" />
            <span>Nam</span>
            <Field type="radio" name="gender" value="1" />
            <span>Nữ</span>
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Quốc tịch</label>
            <br />
            <Field name="national" className='form-control'/>
            <ErrorMessage name="national" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Công ty làm việc</label>
            <br />
            <Field name="company"className='form-control' />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Bộ phận làm việc</label>
            <br />
            <Field name="quarter" className='form-control'/>
          </div>
          <br />
          <div className='mb-3'>
            <label>Có thể bảo hiểm y tế </label>
            <br />
            <Field type="checkbox" name="status" />
          </div>
          <br />
          <h1 style={{textAlign:"center"}}>Địa chỉ liên lạc tại Việt Nam</h1>
          <div className='mb-3'>
            <br />
            <label  className="form-label">Tỉnh thành</label>
            <br />
            <Field name="city"className='form-control' />
            <ErrorMessage name="city" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Quận /Huyện</label>
            <br />
            <Field name="district" className='form-control' />
            <ErrorMessage name="district" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Phường /Xã</label>
            <br />
            <Field name="wards" className='form-control'/>
            <ErrorMessage name="wards" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Số nhà, phố, tổ dân phố/thôn/đội</label>
            <br />
            <Field name="house" className='form-control'/>
            <ErrorMessage name="house" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Điện thoại</label>
            <br />
            <Field name="phone" className='form-control'/>
            <ErrorMessage name="phone" component="p" />
          </div>
          <br />
          <div className='mb-3'>
            <label  className="form-label">Email</label>
            <br />
            <Field name="email"  className='form-control'/>
            <ErrorMessage name="email" component="p" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;