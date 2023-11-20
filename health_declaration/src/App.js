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
      email: yup.string().required().matches("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$", "Invalid email address"),
    });

    return validate;
  };

  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <div>
      <h3>Tờ khai y tế</h3>
      <Formik initialValues={form} validationSchema={handleValidation} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Họ tên</label>                    <br/>

            <Field name="name" />
            <ErrorMessage name="name" component="p" />
          </div>
          <br />
          <div>
            <label>Số hộ chiếu /CMND</label>                    <br/>

            <Field name="code" />
            <ErrorMessage name="code" component="p" />
          </div>
          <br />

          <div>
            <label>Năm sinh</label>                    <br/>

            <Field name="birthday" />
            <ErrorMessage name="birthday" component="p" />
          </div>                    <br />

          <div>
            <label>Giới tính</label>                    <br/>

            <Field type="radio" name="gender" value="0" />
            <span>Nam</span>
            <Field type="radio" name="gender" value="1" />
            <span>Nữ</span>
          </div>                    <br />

          <div>
            <label>Quốc tịch</label>                    <br/>

            <Field name="national" />
            <ErrorMessage name="national" component="p" />
          </div>                    <br />

          <div>
            <label>Công ty làm việc</label>                    <br/>

            <Field name="company" />
          </div>                    <br />

          <div>
            <label>Bộ phận làm việc</label>                    <br/>

            <Field name="quarter" />
          </div>                    <br />

          <div>
            <label>Có thể bảo hiển y tế </label>                    <br/>

            <Field type="checkbox" name="status" />
          </div>                    <br />


          <h2>Địa chỉ liên lạc tại Việt Nam</h2>

          <div>                    <br />

            <label>Tỉnh thành</label>                    <br/>

            <Field name="city" />
            <ErrorMessage name="city" component="p" />
          </div>                    <br />

          <div>
            <label>Quận /Huyện</label>                    <br/>

            <Field name="district" />
            <ErrorMessage name="district" component="p" />
          </div>                    <br />

          <div>
            <label>Phường /Xã</label>                    <br/>

            <Field name="wards" />
            <ErrorMessage name="wards" component="p" />
          </div>                    <br />

          <div>
            <label>Số nhà, phố, tổ dân phố/thôn/đội</label>                    <br/>

            <Field name="house" />
            <ErrorMessage name="house" component="p" />
          </div>                    <br />

          <div>
            <label>Điện thoại</label>                    <br/>

            <Field name="phone" />
            <ErrorMessage name="phone" component="p" />
          </div>                    <br />

          <div>
            <label>Email</label>                    <br/>

            <Field name="email" />
            <ErrorMessage name="email" component="p" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;