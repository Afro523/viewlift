import React, {Component} from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'



class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loggedIn:false
          };
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handlePassChange = this.handlePassChange.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        let value = this.state.email;
        let validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let pass = this.state.password;

        if(!validEmail){
            this.showError("Please enter a valid email");
        } else if (pass.length < 6){
            this.showError("Password must be 6 characters or more");
        } else if(validEmail && pass.length >= 6){
            this.setState({
                loggedIn:true
            })
        }
    }    

    handlePassChange(evt){
        this.setState({
            password: evt.target.value,
        });
    }

    handleEmailChange(evt){
        this.setState({
            email: evt.target.value,
        });
    }

    showError(errString){
        this.setState({
            error:errString
        })
    }

    render(){
        if(this.state.loggedIn){
            return (
                <Redirect to="/home"/>
            )
        } else {
            return(
                <div id="form">
                <h2>Login for ViewLift Movie Selection</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email:</label>
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                        <br/>
                        <label>Password:</label>
                        <br/>
                        <input type="text" name="lastname" value={this.state.password} onChange={this.handlePassChange}/>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                    <div id="error">
                        {this.state.error}
                    </div>
                    
                </div>
            );
        }
    }
}

export default withRouter(Login)