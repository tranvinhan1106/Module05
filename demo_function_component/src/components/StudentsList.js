import { useEffect, useState } from "react";

export function StudentList() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [student, setStudent] = useState({
        id: 0,
        name: "",
        age: 0
    })
    //////////////////////
    useEffect(() => {
        setStudents([
            {
                id: 1,
                name: "Tran Vinh An",
                age: 19
            },
            {
                id: 2,
                name: "Nguyen Thi Mai Linh",
                age: 20
            },
            {
                id: 3,
                name: "Tran Van Phuc",
                age: 28
            },
            {
                id: 4,
                name: "Tran Thi Kim Anh",
                age: 18
            }
        ])
        setStudents((prev) => {
            return prev.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
        })
    }, [name]);

    ////////////////////////////
    const changeText = (key, value) => {
        setStudent((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }
    ///////////////////////////
    const createStudent = () => {
        setStudents((prev) => {
            return [...prev, student]
        })
        setStudent({ id: 0, name: "", age: 0 })
    }
    //////////////////////////
    return (
        <>
            <h1>List Student </h1>
            Tim Kiem : <input onChange={(evt) => setName(evt.target.value)}></input>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br/>
            <form>
                Id   : <input value={student.id} onChange={(evt) => changeText("id", evt.target.value)}></input><br/>
                Name : <input value={student.name} onChange={(evt) => changeText("name", evt.target.value)}></input><br/>
                Age  : <input value={student.age} onChange={(evt) => changeText("age", evt.target.value)}></input><br/>
                <br/>
                <button type="button" onClick={createStudent}>Create</button>
            </form>
        </>
    )
}