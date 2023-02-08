import React, { useState, SetStateAction } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Styles/Login.css";

interface LoginProps {
  getData: (myname: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const [myname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    props.getData(myname);
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="LoginForm">
      <h3>React Internship Assignment</h3>
      <p>{myname}</p>
      <TextField
        style={{ width: "400px" }}
        id="outlined-basic"
        label="Enter your name here"
        variant="outlined"
        value={myname}
        onChange={handleName}
      />
      <br />
      <p>{phone}</p>
      <TextField
        style={{ margin: "20px", width: "400px" }}
        id="outlined-basic"
        label="Enter your Phone number here"
        variant="outlined"
        value={phone}
        onChange={handlePhone}
      />
      <br />
      <p>{email}</p>
      <TextField
        style={{ width: "400px" }}
        id="outlined-basic"
        label="Enter your email here"
        type="email"
        variant="outlined"
        value={email}
        onChange={handleEmail}
      />
      <br />

      <Button
        variant="contained"
        style={{ width: "200px", margin: "40px", outline: 0 }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Login;
