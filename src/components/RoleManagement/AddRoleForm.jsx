import React, { useContext, useState } from 'react';
import { RoleContext } from '../../context/RoleContext';
import { TextField, Button, Box } from '@mui/material';

const AddRoleForm = () => {
  const { addRole } = useContext(RoleContext);
  const [role, setRole] = useState({ name: '', permissions: '' });

  const handleChange = (e) => setRole({ ...role, [e.target.name]: e.target.value });
  const handleSubmit = () => addRole(role);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField name="name" label="Role Name" onChange={handleChange} />
      <TextField name="permissions" label="Permissions (comma-separated)" onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Add Role</Button>
    </Box>
  );
};

export default AddRoleForm;
