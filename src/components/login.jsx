import { Component } from "react";


class Login extends Component{


email=createRef();
password=createRef();







    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input id="email" className="form-control" type="text"></input>
                </div>
                <div className="mb-33">
                    <label htmlFor="password">password:</label>
                    <input  id="password" className="form-control" type="text"></input>
                </div>
                <button className="btn btn-primary mt-4">login</button>
            </form>
            </>
        )
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    console.log("email:",this.email.current.value);
    console.log("password:",this.password.current.value);
    
    }
    };
    




export default Login;