import { useEffect, useState } from "react";
import * as studentService from "../../service/StudentService"
import {useNavigate} from "react-router";

export function StudentList() {
    const navigate = useNavigate();
    const [students, setStudents] = useState();
    const [name, setName] = useState();
    //LÀM PHÂN TRANG
    useEffect(() => {

        getAllStudent();

    }, [name]);

    const handleDelete = async (id) => {
      await studentService.deleteById(id);
      getAllStudent();
    }
    const getAllStudent = async () => {
        let temp = await studentService.getAll(name);
        console.log(temp);
        setStudents(temp);
    }
    function directToUpdate(id) {
        navigate(`/update/${id}`);
    }

    if (!students) {
        return null;
    }
    return (
        <>
            <br />
            <h1>List</h1><br />

            Search :<input onChange={(evt) => setName(evt.target.value)} />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Languages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            students.map((values, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{values.id}</td>
                                        <td>{values.name}</td>
                                        <td>{values.gender}</td>
                                        <td>{values.age}</td>
                                        <td>
                                            {values.languages.map((value, index) => {
                                                return <span key={index}>{value} ,</span>
                                            })}
                                        </td>
                                        <td><button onClick={() => handleDelete(values.id)}>Xóa</button></td>
                                        <td><button onClick={() => directToUpdate(values.id)}>Sửa</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}