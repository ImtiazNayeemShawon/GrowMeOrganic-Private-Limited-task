import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,AppBar,Toolbar,Typography } from "@mui/material";
import { css } from "@mui/material";


interface Data {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <div>
       
   
    <TableContainer component={Paper} css={tableStyles}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

const tableStyles = css`
  width: 100%;
`;

export default DataTable;
