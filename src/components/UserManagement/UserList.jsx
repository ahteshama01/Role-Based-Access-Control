// import React, { useContext } from 'react';
// import { UserContext } from '../../context/UserContext'; // Correct path

// import { DataGrid } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';

// const UserList = () => {
//   const { users, deleteUser } = useContext(UserContext);

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'role', headerName: 'Role', width: 150 },
//     { field: 'status', headerName: 'Status', width: 130 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 170,
//       renderCell: (params) => (
//         <>
//           <Button startIcon={<Edit />} size="small">Edit</Button>
//           <Button
//             startIcon={<Delete />}
//             color="error"
//             size="small"
//             onClick={() => deleteUser(params.row.id)}
//           >
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return <DataGrid rows={users} columns={columns} pageSize={5} />;
// };

// export default UserList;



// import React, { useContext, useState } from 'react';
// import { UserContext } from '../../context/UserContext'; // Correct path
// import { DataGrid } from '@mui/x-data-grid';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import EditUserForm from './EditUserForm'; // Import the EditUserForm component

// const UserList = () => {
//   const { users, deleteUser } = useContext(UserContext);
//   const [selectedUser, setSelectedUser] = useState(null); // Track the user being edited
//   const [openDialog, setOpenDialog] = useState(false); // Track whether the dialog is open

//   // Handle the edit button click
//   const handleEdit = (user) => {
//     setSelectedUser(user); // Set the user to be edited
//     setOpenDialog(true); // Open the dialog
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false); // Close the dialog
//     setSelectedUser(null); // Reset the selected user
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'role', headerName: 'Role', width: 150 },
//     { field: 'status', headerName: 'Status', width: 130 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 170,
//       renderCell: (params) => (
//         <>
//           <Button
//             startIcon={<Edit />}
//             size="small"
//             onClick={() => handleEdit(params.row)} // Open the form for the selected user
//           >
//             Edit
//           </Button>
//           <Button
//             startIcon={<Delete />}
//             color="error"
//             size="small"
//             onClick={() => deleteUser(params.row.id)} // Call delete function from context
//           >
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* DataGrid to display users */}
//       <DataGrid rows={users} columns={columns} pageSize={5} />

//       {/* Dialog to display EditUserForm */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Edit User</DialogTitle>
//         <DialogContent>
//           {selectedUser && (
//             <EditUserForm user={selectedUser} /> // Pass selected user to EditUserForm
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default UserList;


import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext'; // Correct path
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import EditUserForm from './EditUserForm'; // Import the EditUserForm component

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null); // Track the user being edited

  // Handle the edit button click
  const handleEdit = (user) => {
    setSelectedUser(user); // Set the user to be edited
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'status', headerName: 'Status', width: 170 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <>
          <Button
            startIcon={<Edit />}
            size="small"
            onClick={() => handleEdit(params.row)} // Open the form for the selected user
          >
            Edit
          </Button>
          <Button
            startIcon={<Delete />}
            color="error"
            size="small"
            onClick={() => deleteUser(params.row.id)} // Call delete function from context
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      {/* DataGrid to display users */}
      <DataGrid rows={users} columns={columns} pageSize={5} />

      {/* Conditionally render the EditUserForm when a user is selected */}
      {selectedUser && (
        <EditUserForm user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
};

export default UserList;
