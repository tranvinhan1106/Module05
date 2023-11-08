import { Component } from "react";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [
                {
                    id: 1,
                    name: 'Tran Van A',
                    age: 20,
                    address: 'GiaLai'
                },
                {
                    id: 2,
                    name: 'Tran Van B',
                    age: 21,
                    address: 'KonTum'
                },
                {
                    id: 3,
                    name: 'Tran Van C',
                    age: 22,
                    address: 'Đà Nẵng'
                },
                {
                    id: 4,
                    name: 'Tran Van D',
                    age: 23,
                    address: 'Quy Nhơn'
                },
                {
                    id: 5,
                    name: 'Tran Van E',
                    age: 24,
                    address: 'Nha Trang'
                },
                {
                    id: 6,
                    name: 'Tran Van F',
                    age: 25,
                    address: 'Quảng Nam'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.student.map((student) => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default Student;