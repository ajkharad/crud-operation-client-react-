import { Button } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import AddEditModal from "./AddEditModal";
import TableShow from "./TableShow";

export default function Employee() {
  
  const [editObj, setEditObj] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);setEditObj({}); };
  const [EmployeeList, setEmployeeList] = React.useState([]);
  const [Employee, setEmployee] = React.useState({});
  const [edit, setEdit] = React.useState(false);
  const [refreshKey, setRefreshKey] = React.useState(0);


  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/Employee`).then((res) => {
      setEmployeeList(res.data);
    });
  }, [refreshKey]);


  const handleInput = (event) => {
    setEmployee({ ...Employee, [event.target.name]: event.target.value });
  };

  const addData = () => {
    if (edit) {
      axios.put('http://127.0.0.1:8000/Employee/update',Employee)
      .then(res => console.log(res.data));
      setRefreshKey(oldKey => oldKey +1);
      setEditObj({});setEdit(false);
    } else {
      axios.post('http://127.0.0.1:8000/Employee/add',Employee)
      .then(res => console.log(res.data));
      setRefreshKey(oldKey => oldKey +1);
      setEditObj({});
    }
  };


  const editP = (emp) => {
    setEditObj(emp);
    setEmployee(emp);
    handleOpen();
    setEdit(true);
  };


  const Delete = (id) => {
   axios.delete(`http://127.0.0.1:8000/Employee/delete/${id}`)
      .then(res => console.log(res.data));
      setRefreshKey(oldKey => oldKey +1);
  };

  return (
    <div className="container mt-5">
      <div>
        {/* <h1 className="text-center align-content-center">Senwell Solution</h1>  */}
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="m-0">Employee List</h2>
          </div>
          <div>
            <Button onClick={handleOpen} variant="contained">
              Add New
            </Button>
          </div>
        </div>
        <AddEditModal
          open={open}
          handleClose={handleClose}
          handleInput={handleInput}
          addData={addData}
          editObj={editObj}
        />
        <TableShow
          data={EmployeeList}
          Delete={Delete}
          editP={editP}
          handleOpen={handleOpen}
        />
      </div>
    </div>
  );
}

