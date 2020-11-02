import { Paper } from "@material-ui/core";
import React, { useContext, useState, useEffect, useMemo } from "react";
import styles from "./student.module.scss";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import DialogBox from "../../components/dialog/DialogBox";
import { FaUserGraduate } from "react-icons/fa";
import StudentContext from "../../context/student/studentContext";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const SearchBox = styled.input`
  width: 300px;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid #ccc;
  text-indent: 30px;
  font-family: sans-serif;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const StudentButton = styled.button`
  background: #34c38f;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  border: none;
  padding: 12px 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #34d38f;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
const AddStudentContainer = styled.div`
  width: 500px;
  padding: 3rem 1rem;
`;
const EmailInput = styled.input`
  width: 100%;
  padding: 10px 0;
  border-radius: 50px;
  text-indent: 20px;
  border: 1px solid #ccc;
  font-family: sans-serif;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
const PasswordInput = styled.input`
  width: 100%;
  padding: 10px 0;
  border-radius: 50px;
  text-indent: 20px;
  border: 1px solid #ccc;
  font-family: sans-serif;
  font-size: 20px;
  margin-top: 20px;
  &:focus {
    outline: none;
  }
`;
const AlertError = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: darkred;
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  padding:1rem;
  font-weight:600;
  margin:50px;
  border-radius:50px;
  text-align:center;
`;

const AddStuentTitle = styled.span`
  font-family: sans-serif;
  font-size: 22px;
  font-weight: 600;
  padding-left: 10px;
  
`;
const Students = () => {
  const studentContext = useContext(StudentContext);
  const { addNewStudent, errors } = studentContext;
    
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });

 
  
  const handleClose = () => {
    setOpen(false);
  };

  const addClickHanlder = () => {
    setOpen(true);
  };

  const clickAddStudentHandler = async () => {

    const token = localStorage.getItem("pars-afshin-admin-token");
   const result = await addNewStudent(student, token);
   console.log(result);
   if(!result){
     setStudent({
       email:'',
       password:''
     })
     setOpen(false);
   }
  
   
   
   
    
    

  };

  const onChangeHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.student}>
      <Container>
        <Paper
          variant="outlined"
          elevation={0}
          style={{
            padding: "50px",
            marginTop: "30px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            <HiSearch
              style={{
                position: "relative",
                left: "35px",
                fontSize: "20px",
                top: "5px",
              }}
            />
            <SearchBox
              type="text"
              name="search"
              id="search"
              placeholder="search"
            />
          </span>
          <span>
            <StudentButton onClick={addClickHanlder}>
              <MdAdd size={20} /> <span>ADD NEW STUDENT</span>
            </StudentButton>
          </span>
        </Paper>
      </Container>
      <DialogBox open={open} handleClose={handleClose}>
        <FaUserGraduate size={30} />
        <AddStuentTitle>ADD NEW STUDENT</AddStuentTitle>
        <AddStudentContainer>
          <EmailInput
            type="email"
            name="email"
            id="email"
            placeholder="Please insert student email"
            value={student.email}
            onChange={onChangeHandler}
          />
          <PasswordInput
            type="password"
            id="password"
            name="password"
            placeholder="Please insert student password"
            value={student.password}
            onChange={onChangeHandler}
          />
          <StudentButton
            onClick={addClickHanlder}
            style={{ marginTop: "2rem" }}
            onClick={clickAddStudentHandler}
          >
            <MdAdd size={20} /> <span>ADD NEW STUDENT</span>
          </StudentButton>
            {errors && <AlertError>{errors instanceof Array ? errors[0].msg : errors}</AlertError>} 
          
        </AddStudentContainer>
      </DialogBox>
    </div>
  );
};

export default Students;
