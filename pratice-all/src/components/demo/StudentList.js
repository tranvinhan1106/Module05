import { Component } from "react";

class StudentList extends Component{
    constructor(props){
        super(props);
        this.state={
            students : [
                {
                    id : 1 ,
                    name : "Tran Vinh An ",
                    age : 19
                },
                {
                    id : 2 ,
                    name : "Vo Nguyen Dinh Quoc Huy ",
                    age : 19
                },
                {
                    id : 3 ,
                    name : "Bui Sy Hoang ",
                    age : 19
                },
                {
                    id : 4 ,
                    name : "Nguyen Quoc Nam Viet ",
                    age : 19
                }
            ]
        }
    }
    render(){
        return(
            <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map((item, index)=>{
                        return(
                            <>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}
export default StudentList;