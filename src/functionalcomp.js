import React from "react";
import './funcomp.css'

function Fcomp(){
    return(
        <>
        <div className="flexfun">
            <h1 className="funtext">This is created using functional Component</h1>
            <p className="funp">This is done external CSS</p>
            <p className="funp">This is done using inline CSS</p>
        </div>
        </>
    )
}
export default Fcomp