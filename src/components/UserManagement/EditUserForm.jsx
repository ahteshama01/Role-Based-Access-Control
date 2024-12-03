// import React, { useContext, useState } from 'react';
// import { UserContext } from '../../context/UserContext';
// import { TextField, Button, Box } from '@mui/material';

// const EditUserForm = ({ user }) => {
//   const { updateUser } = useContext(UserContext);
//   const [updatedUser, setUpdatedUser] = useState(user);

//   const handleChange = (e) => setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
//   const handleSubmit = () =>{ updateUser(updatedUser);};

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//       <TextField name="name" label="Name" value={updatedUser.name} onChange={handleChange} />
//       <TextField name="email" label="Email" value={updatedUser.email} onChange={handleChange} />
//       <TextField name="role" label="Role" value={updatedUser.role} onChange={handleChange} />
//       <Button variant="contained" onClick={handleSubmit}>Update User</Button>
//     </Box>
//   );
// };

// export default EditUserForm;

// import React, { useContext, useState } from 'react';
// import { UserContext } from '../../context/UserContext';
// import { TextField, Button, Box, Snackbar, IconButton, Modal, Typography } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const EditUserForm = ({ user, onClose }) => {
//   const { updateUser } = useContext(UserContext);
//   const [updatedUser, setUpdatedUser] = useState(user);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });

//   const handleSubmit = () => {
//     if (!updatedUser.name || !updatedUser.email || !updatedUser.role) {
//       setError('All fields are required.');
//       return;
//     }
//     setError('');
//     updateUser(updatedUser);
//     setSuccess(true);
//   };

//   const handleCloseNotification = () => setSuccess(false);

//   return (
//     <Modal open={true} onClose={onClose}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//           width: 400,
//         }}
//       >
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h6">Edit User</Typography>
//           <IconButton onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {error && <Typography color="error">{error}</Typography>}
        
//         <TextField
//           name="name"
//           label="Name"
//           value={updatedUser.name}
//           onChange={handleChange}
//         />
//         <TextField
//           name="email"
//           label="Email"
//           value={updatedUser.email}
//           onChange={handleChange}
//         />
//         <TextField
//           name="role"
//           label="Role"
//           value={updatedUser.role}
//           onChange={handleChange}
//         />
//         <Button variant="contained" onClick={handleSubmit}>
//           Update User
//         </Button>
        
//         {/* Snackbar for success notification */}
//         <Snackbar
//           open={success}
//           autoHideDuration={3000}
//           onClose={handleCloseNotification}
//           message="User updated successfully!"
//           action={
//             <IconButton size="small" color="inherit" onClick={handleCloseNotification}>
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           }
//         />
//       </Box>
//     </Modal>
//   );
// };

// export default EditUserForm;




import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext'; // Correct path
import { TextField, Button, Box, Snackbar, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditUserForm = ({ user, onClose }) => {
  const { updateUser } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(true); // Manage modal state locally

  const handleChange = (e) => setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!updatedUser.name || !updatedUser.email || !updatedUser.role) {
      setError('All fields are required.');
      return;
    }
    setError('');
    updateUser(updatedUser);
    setSuccess(true);
  };

  const handleCloseNotification = () => setSuccess(false);

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal when the close button is clicked
    onClose(); // Call the onClose function passed from UserList to close the form
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Edit User</Typography>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>

        {error && <Typography color="error">{error}</Typography>}
        
        <TextField
          name="name"
          label="Name"
          value={updatedUser.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          value={updatedUser.email}
          onChange={handleChange}
        />
        <TextField
          name="role"
          label="Role"
          value={updatedUser.role}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Update User
        </Button>
        
        {/* Snackbar for success notification */}
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={handleCloseNotification}
          message="User updated successfully!"
          action={
            <IconButton size="small" color="inherit" onClick={handleCloseNotification}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Box>
    </Modal>
  );
};

export default EditUserForm;
