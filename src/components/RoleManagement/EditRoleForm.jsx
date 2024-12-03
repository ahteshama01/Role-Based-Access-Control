// import React, { useContext, useState } from 'react';
// import { RoleContext } from '../context/RoleContext';
// import { TextField, Button, Box } from '@mui/material';

// const EditRoleForm = ({ role }) => {
//   const { updateRole } = useContext(RoleContext);
//   const [updatedRole, setUpdatedRole] = useState(role);

//   const handleChange = (e) => setUpdatedRole({ ...updatedRole, [e.target.name]: e.target.value });
//   const handleSubmit = () => updateRole(updatedRole);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//       <TextField name="name" label="Role Name" value={updatedRole.name} onChange={handleChange} />
//       <TextField
//         name="permissions"
//         label="Permissions (comma-separated)"
//         value={updatedRole.permissions}
//         onChange={handleChange}
//       />
//       <Button variant="contained" onClick={handleSubmit}>Update Role</Button>
//     </Box>
//   );
// };

// export default EditRoleForm;


import React, { useState, useContext } from 'react';
import { RoleContext } from '../../context/RoleContext'; // Correct path
import { TextField, Button, Box, Modal, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const EditRoleForm = ({ role, onClose }) => {
  const { updateRole } = useContext(RoleContext);
  const [updatedRole, setUpdatedRole] = useState(role);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUpdatedRole({ ...updatedRole, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!updatedRole.name || !updatedRole.permissions) {
      setError('All fields are required.');
      return;
    }
    setError('');
    updateRole(updatedRole); // Call the update function from context
    onClose(); // Close the form after submitting
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 400,
        }}
      >
        <Typography variant="h6">Edit Role</Typography>
        <Button onClick={onClose} size="small" style={{ alignSelf: 'flex-end' }}>
          <CloseIcon />
        </Button>

        {error && <Typography color="error">{error}</Typography>}

        <TextField
          name="name"
          label="Role Name"
          value={updatedRole.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="permissions"
          label="Permissions"
          value={updatedRole.permissions}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit} fullWidth>
          Update Role
        </Button>
      </Box>
    </Modal>
  );
};

export default EditRoleForm;
