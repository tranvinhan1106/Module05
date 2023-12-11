import axios from "axios";

export const getAll = async (name) => {
    try {
        let temp = await axios.get("http://localhost:8080/students?name_like =" + name);
        console.log(temp);
        return temp.data;
    } catch (err) {

    }
}

export const save = async (values) => {
    let temp = await axios.post("http://localhost:8080/students", values);
    console.log(temp);
    return temp.status;
}
export const deleteById = async (id) => {
    let temp = await axios.delete("http://localhost:8080/students/" + id)
    console.log(temp);
    return temp.status;
}
export const edit = async (id,data) => {
    let temp = await axios.put("http://localhost:8080/students/"+ id,data)
    console.log(temp);
    return temp.status;
}
export const getById = async (id) =>{
    let temp = await axios.get("http://localhost:8080/students/" +id)
    console.log(temp);
    return temp.data;
}
