import React from "react";
import "./LoginForm.css";
import {Styles} from './styles'

const LoginForm = () => {
  return (
    <div style={Styles.Lf}>
      <h1 style={Styles.Lf1}>Login</h1>
      <form style={Styles.Lff}> 
        <label style={Styles.Lffl} htmlFor="username">Username:</label>
        <input style={Styles.Lffit} type="text" id="username" name="username" />
        <label style={Styles.Lffit} htmlFor="password">Password:</label>
        <input style={Styles.Lffit} type="password" name="password" />
        <input style={Styles.Lffis} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
