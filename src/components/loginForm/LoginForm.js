import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import InputField from './component/inputField/InputField';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      buttonDisabled:flase
    };
  }

  setInputValue(property, val){
    val= val.trim();
    if(val.lenght>16){
      return;
    }
    this.setState({
      [property]:val
    })
  }
  resetForm(){
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false

    })
  }

  async doLogin(){
    if(!this.state.username){
      return;
    }
    if (!this.state.password){
      return;
    }
    this.setState({
      buttonDisabled:true
    })

    try{
      let res= await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:this.state.username,
          password:this.state.password
        })

      });

      let result= await res.json();
      if(result && result.success){
        UserStore.isLoggedIn= true;
        UserStore.username = result.username;
      }

    
    else if(result && result.success===false){
      this.resetForm();
      alert(result.msg);
    }
  }
  
    catch(e){
      console.log(e);
      this.resetForm();
    }


  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() 
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  
    }
  }

export default withAsyncAction("auth", "login")(LoginForm);
