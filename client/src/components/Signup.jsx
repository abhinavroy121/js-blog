import React, { useState } from "react";
import { Button, Input } from "@mui/material";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
import axios from "axios";
export const Signup = () => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [city, setcity] = useState("");
  const [profession, setprofession] = useState("");

  const handleSubmit = () => {
    const payload = {
      name,
      username,
      password,
      email,
      age,
      gender,
      city,
      profession,
    };
    console.log(payload);
    axios
      .post(`http://localhost:8080/auth/register`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "error while signup");
      });
  };

  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>Create an account</h1>
      <div
        style={{
          width: "350px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Age"
          onChange={(e) => setage(e.target.value)}
        />
        <select
          name="Gender"
          id="gender"
          onChange={(e) => setgender(e.target.value)}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <Input
          type="text"
          placeholder="City"
          onChange={(e) => setcity(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Profession"
          onChange={(e) => setprofession(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          click here
        </Button>
      </div>
    </div>
  );
};
