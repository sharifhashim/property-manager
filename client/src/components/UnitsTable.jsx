import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useApplicationData from "../hooks/useApplicationData";

export default function UnitsTable() {
  const { state } = useApplicationData();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Building Name</TableCell>
            <TableCell>Unit #</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.building_name}
              </TableCell>
              <TableCell>{row.unit_number}</TableCell>
              <TableCell align="left">{row.owner}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
