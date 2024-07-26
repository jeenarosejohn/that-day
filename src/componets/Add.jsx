import { Box, Button, TextField } from '@mui/material'
import React, { useState }  from 'react'

const Add = () => {
  const [counter,setcounter]=useState(0)
  const [form ,setForm]=useState({
    "sname":'',
    "adm":'',
    "department":'',
    "semester":'',
  })
  let showData=()=>{
    console.log(form);
  }
  
  // let valueAdd=()=>{
  //   setcounter(counter+1)
  // }
  function valueCap(e){
    console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    
    <Box
    component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          
          id="outlined-required"
          label="NAME"
          defaultValue="NAME"
          name="sname"
          value={form.sname}
          onChange={valueCap}
          
        />
        <TextField
         
         id="outlined-disabled"
        label="ADMISSION NO"
        defaultValue="ADMISSION NO"
        name="adm"
        value={form.adm}
          onChange={valueCap}
        />
        
        <TextField
           
          id="outlined-disabled"
          label="DEPARTMENT"
          defaultValue="DEPARTMENT"
          name="department"
          value={form.department}
          onChange={valueCap}
        />
        
        <TextField
      
          id="outline-disabled"
          label="SEMESTER"
          defaultValue="semester"
          name="semester"
          value={form.semester}
          onChange={valueCap}
        />
        
        <Button variant="contained" color="success" onClick={showData}>Submit</Button><br/>
        {/* <small>button is clicked{counter}</small>  */}
        </div>
        </Box>
  )
}

    
export default Add
