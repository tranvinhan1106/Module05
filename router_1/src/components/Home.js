import { useLocation } from "react-router-dom";

function Home(){
    const location = useLocation();
    const data = location.state;
    return(
        <h1>Hello {data.username}</h1> 
    );
}
export default Home;