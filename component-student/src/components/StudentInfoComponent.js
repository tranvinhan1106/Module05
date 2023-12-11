import { Component } from "react";

class StudentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: "Tran Vinh A ",
                    age: 20,
                    address: "GiaLai"
                },
                {
                    id: 2,
                    name: "Tran Vinh B ",
                    age: 21,
                    address: "Đà Nẵng"
                },
                {
                    id: 3,
                    name: "Tran Vinh C ",
                    age: 22,
                    address: "Hà Nội"
                },
                {
                    id: 4,
                    name: "Tran Vinh D ",
                    age: 23,
                    address: "Sài Gòn"
                },
                {
                    id: 5,
                    name: "Tran Vinh E ",
                    age: 24,
                    address: "Nam Định"
                }

            ]
        }
    }
    
    render() {
        return (
            <div>
                <h2 style={{textAlign : "center"}}>List Sinh Vien</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((value, index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default StudentInfoComponent;