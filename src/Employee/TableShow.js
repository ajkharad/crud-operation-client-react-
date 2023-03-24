import * as React from "react";
import { Button,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow } from "@mui/material";

export default function TableShow(props) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event,newPage) => {
    setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
    setPage(0);
    };

    return (
        <div className="px-6 mt-4 thumbnail shadow-lg">
      <Paper sx={{ width: "100%", overflow: "hidden",border:"1px solid gray",}}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                <TableCell>Employee _id</TableCell>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Employee Position</TableCell>
                  <TableCell>Employee Salary</TableCell>
                  <TableCell>Contact No</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((emp,index) => (
                  <TableRow key={index}>
                    <TableCell>{emp._id.substr(emp._id.length - 5)}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.salary}</TableCell>
                    <TableCell>{emp.contact}</TableCell>
                    <TableCell>{emp.gender}</TableCell>
                    <TableCell><Button onClick={() => props.editP(emp)} className="me-3" variant="contained">Edit</Button><Button onClick={() => props.Delete(emp._id)} variant="contained">Delete</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5,10,15]}
            component="div"
            count={props.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}/>
        </Paper>
        </div>
      );
    }