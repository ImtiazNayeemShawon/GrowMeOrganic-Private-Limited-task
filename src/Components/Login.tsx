import React, { useState, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import "./Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface FooterProps {
  onUpdateData: (data: string) => void;
}

const Login = ({ onUpdateData }: FooterProps) => {


  //Call state for save details
  const [myname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  //navigator for navigat next page
  const navigate = useNavigate();

  //define function for form control
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    return true;
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleFormvalidation = () => {
    if (myname !== "" && phone !== "" && email !== "") {
      navigate("/home");
      onUpdateData(myname);
    } else {
      alert("Please enter your all details correctly ");
    }
  };

  
  return (
    <div className="mainpage">
      <div className="image side">
        <img src="https://cdn-icons-png.flaticon.com/512/8085/8085740.png" />
      </div>

      <div className="LoginForm">
        <h3>React Internship Assignment</h3>

        <TextField
          style={{ width: "400px" }}
          id="outlined-basic"
          label="Enter your name here"
          variant="outlined"
          value={myname}
          onChange={handleName}
        />
        <br />

        <TextField
          style={{ margin: "20px", width: "400px" }}
          id="outlined-basic"
          label="Enter your Phone number here"
          variant="outlined"
          value={phone}
          onChange={handlePhone}
        />
        <br />

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
          onClick={handleFormvalidation}
          variant="outlined"
          style={{ width: "200px", marginTop: "20px" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
