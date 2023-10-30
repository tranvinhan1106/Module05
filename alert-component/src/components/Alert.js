import "bootstrap/dist/css/bootstrap.css";

function Alert(props){
    return(
        <div class="alert alert-warning" role="alert">
            {props.text}
        </div>
    )
}
export default Alert;