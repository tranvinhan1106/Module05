import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik , ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import * as studentService from "../../service/StudentService"

export function StudentUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [form, setForm] = useState({
        id: 0,
        name: "",
        age: 0,
        gender: "0",
        languages: ""
    });
    const studentValidate = {
        name: Yup.string()
            .required("Tên không để trống")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dang."),
        age: Yup.number()
            .min(18, "Tuổi không được nhỏ hơn 18 !")
            .max(100, "Tuổi không được lớn hơn 100 !")
    };
    const handleSubmit = async (values) => {
        await studentService.edit(id, values);
        toast.warn("Chỉnh sửa thành công !")
        navigate("/");
    }
    useEffect(() => {
        getStudent(id);
    })

    const getStudent = async (id) => {
        let editStudent = await studentService.getById(id);
        setForm(prevState => {
            return { ...prevState, ...editStudent }
        })
    }
    return (
        <>
            <br />
            <h1>Edit</h1>
            <br />
            <Formik onSubmit={(values) => handleSubmit(values)} initialValues={form} enableReinitialize={true}
             validationSchema={
                Yup.object(studentValidate)
            }>
                <Form>
                    <div className='mb-3'>
                        <label htmlFor='studentName' className='form-label'>Name</label>
                        <Field type='text' className='form-control' name="name" id='studentName' />
                        <ErrorMessage name="name" component="span" className="form-err"></ErrorMessage>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='studentAge' className='form-label'>Age</label>
                        <Field type='number' className='form-control' name="age" id='studentAge' />
                        <ErrorMessage name="age" component="span" className="form-err"></ErrorMessage>

                    </div>
                    <div className='mb-3'>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                value="1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                value="0" />
                            <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                        </div>
                    </div>

                    <label htmlFor='languages' className='form-label'>Languages</label>
                    <div className="form-check">
                        <Field className="form-check-input" name="languages" type="checkbox" value="C#"
                            id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            C#
                        </label>
                    </div>
                    <div className="form-check">
                        <Field className="form-check-input" name="languages" type="checkbox" value="Java" id="cb1" />
                        <label className="form-check-label" htmlFor="cb1">
                            JAVA
                        </label>
                    </div>
                    <div className="form-check">
                        <Field className="form-check-input" name="languages" type="checkbox" value="ReactJS"
                            id="cb2" />
                        <label className="form-check-label" htmlFor="cb2">
                            ReactJS
                        </label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default StudentUpdate;
