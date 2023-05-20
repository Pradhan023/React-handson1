import { Component } from "react";
import './ccomp.css'
class Ccomp extends Component{
    render(){
        return(
            <>
            <div className="flexclass">
                <h1 className="classtext">This is created using class Component</h1>
                <p className="clsP">This is done external CSS</p>
                <p className="clsP">This is done using inline CSS</p>
            </div>
            </>
        )
    }
}
export default Ccomp