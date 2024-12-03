import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { TextField, Button, Box } from '@mui/material';

const AddUserForm = () => {
  const { addUser } = useContext(UserContext);
  const [user, setUser] = useState({ name: '', email: '', role: '', status: 'Active' });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = () => addUser(user);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField name="name" label="Name" onChange={handleChange} />
      <TextField name="email" label="Email" onChange={handleChange} />
      <TextField name="role" label="Role" onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Add User</Button>
    </Box>
  );
};

export default AddUserForm;
