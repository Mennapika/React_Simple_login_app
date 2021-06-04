import React   from 'react'
import "./Inputfield.css"
import myUser from "./user";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


class Inputfield extends React.Component{constructor(){

    super()
    this.state={workemail:"",password:"",message:false,errormail:false,errorpassword:false,invalidpassword:true,invalidmail:true} //myUser:[]
    this.eventHandler=this.eventHandler.bind(this)
    this.EmailHandlerChange=this.EmailHandlerChange.bind(this)
    this.PasswordHandlerChange=this.PasswordHandlerChange.bind(this)
    this.postDetails=this.postDetails.bind(this)
    }
    
    eventHandler(event){
    const {name,value}=event.target
    this.setState({[name]:value})
    }
    EmailHandlerChange(event){
        const emailValue = event.target.value;
        const {name,value}=event.target
        if (emailValue.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
            this.setState({[name]:value})
            this.setState({invalidmail: false});
        }
        else {
            this.setState({invalidpassword: true});
        }
        
    }
    PasswordHandlerChange(event){
        const passwordVal = event.target.value;
        const {name,value}=event.target
        if (passwordVal.length >= 6 && passwordVal.length <= 32 && !passwordVal.match(/^\d{6,32}$/)) {
            this.setState({[name]:value})
            this.setState({invalidpassword: false});
        }
        else{
            this.setState({
                invalidpassword: true
               }
            )
            
    }
}
    
    postDetails() {
        const isUserValid = myUser.some(user => {
            const workemail = this.state.workemail;
            const password = this.state.password;
            return user.workemail === workemail && user.password === password;
        });
        this.setState({ message: isUserValid });
    };
    
    
    
    render(){

    return (
        <div className="base-container">
        <div className="content">
            <div className="form">
                <div className="form__group" >
                <h1>{this.state.message===true?"Success":"Wrong mail or pass."}</h1>
                    <label htmlFor="workemail"> Work email</label>
                    <input type="email" placeholder="you@example.com " name="workemail"  onChange={this.eventHandler}/>
                    <span class="invalid" style={{display:this.state.invalidmail==false?"none":"block"}}> Enter a valid Email address </span>
                </div>
                <div className="form__group" >
                    <div>
                    <label htmlFor="password"> Password</label>
                    <span class="forget__password"> Forget Password ?</span>
                    </div>
                    <input type="password" placeholder="8+ Characters " name="password" onChange={this.eventHandler}/>
                    <span class="invalid" style={{display:this.state.invalidmail==false?"none":"block"}}> Password must be 6 charcters or more </span>
                </div>
            </div>
            <div className="btn__wrapper">
              <button type="submit" className="btn" onClick={this.postDetails}> Login </button>
              <div className="signup__wrapper">
              <h4><span className="signupScreen__gray" >Don't have account?</span> <span className="signupScreen__link" >Sign up now </span></h4>
              <h4><span className="ssologin__link" >Login via SSo </span></h4>

              </div>
            </div>
            </div>
        </div>
     
    )
}
}
export default Inputfield
