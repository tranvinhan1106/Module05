import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik  , Form} from "formik";
function Login() {
    let navigate = useNavigate();
    const [form ] = useState({ username: "admin@gmail.com", password: "letmein" });
    const handleSubmit = (value) => {
        if (value.username ==="admin@gmail.com" && value.password ==="letmein") {
            navigate("/home ", { state: value });
        }
    }
    return (
            <div>
                <h1>Login</h1>
                <Formik initialValues={form}
                    onSubmit={(value) => {
                        handleSubmit(value);
                    }}>
                        <Form>
                            <label>Username</label><br/>
                            <input type="text" name="username"></input><br/>
                            <label>Password</label><br/>
                            <input type="password" name = "password"></input><br/>
                            <button type="submit">Submit</button>
                        </Form>
                </Formik>
            </div>
    )
}
export default Login;