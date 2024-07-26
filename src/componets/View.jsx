import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from'axios'
// const rows =[{"name":"jaiden","adm":"CH0123","department":"computer","semester":"s4"},
//               {"name":"kiran","adm":"CH0345","department":"chemistry","semester":"s5"},
//               {"name":"kiran","adm":"CH0345","department":"chemistry","semester":"s5"}];

const View = () =>{
  const[rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('http://dummyjson.com/users').then((res)=>{
      setRows(res.data.users);
    })
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Frist Name</b></TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            
            </TableRow>
          )
          )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default View
