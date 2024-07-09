import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge } from "@mui/material";

const statusColor = (status) => {
  if (status === "Completed") return "success";
  if (status === "Failed") return "secondary";
  return "accent";
};

export default function TransTable({ transactions }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((trn) => (
            <TableRow
              key={trn.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="trn">
                <span className="flex flex-row items-center">
                  {
                    <img
                      src={trn.imageUrl}
                      className="rounded-full object-cover w-14 h-14 mr-4"
                    ></img>
                  }
                  {trn.name}
                </span>
              </TableCell>
              <TableCell align="center">{trn.date}</TableCell>
              <TableCell align="center">$ {trn.amount}</TableCell>
              <TableCell align="center">
                <Badge
                  color={statusColor(trn.status)}
                  badgeContent={trn.status}
                ></Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
