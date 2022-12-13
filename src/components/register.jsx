import { Component } from "react";

class Register extends Component{
    render(){
        return <>
          <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="FirstName">FirstName:</label>
                    <input  id="FirstName" className="form-control" type="text"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="LastName">LastName:</label>
                    <input id="LastName" className="form-control" type="text"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">email:</label>
                    <input  id="email" className="form-control" type="text"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">password:</label>
                    <input id="password" className="form-control" type="text"></input>
                </div>
                <button className="btn btn-primary mt-4">sign Up</button>
            </form>
            </>
        
    }
    
}
;


export default Register;