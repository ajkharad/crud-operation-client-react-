import * as React from "react";
import {
  Button,Box,Modal,Select,MenuItem,
  TextField,InputLabel,FormControl,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function AddEditModal(props) {

  const[msg,setmsg]=React.useState("");

  const add = () => {
    props.addData();
    setmsg("Data add/Save Succesfully");
  }
  const close = () => {
    props.handleClose();
    setmsg("");
  }

 return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}>
        <Box sx={style}>
          <div style={{  gap:"10px" }}>
           <TextField size="small" className="w-100 mt-3" label="Employee Name" name="name" onChange={props.handleInput} defaultValue={props.editObj.name} required/>
           <TextField size="small" className="w-100 mt-3" label="Employee Position" name="position" onChange={props.handleInput} defaultValue={props.editObj.position} required/>
           <TextField size="small" className="w-100 mt-3" type="number" label="Salary" name="salary" onChange={props.handleInput} defaultValue={props.editObj.salary} required/>
           <TextField size="small" className="w-100 mt-3" type="number" label="Contact" name="contact" onChange={props.handleInput} defaultValue={props.editObj.contact} required/>
            <FormControl className="w-100 mt-3">
            <InputLabel id="select-label">Gender</InputLabel>
            <Select labelId="select-label" label="Gender" name="gender" className="w-100" onChange={props.handleInput} defaultValue={props.editObj.gender}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
            </Select>
            </FormControl>
            <div className="text-center mt-4">
            <Button size="large" variant="contained" className="w-25 mx-5" onClick={add}>Add/Save</Button>
            <Button size="large" variant="contained" className="w-25 mx-5" onClick={close}>Close</Button>
            </div>
            <h5 className="text-center text-success mt-3">{msg}</h5>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
