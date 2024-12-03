// import React, { useContext } from 'react';
// import { RoleContext } from '../../context/RoleContext';
// import { DataGrid } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';

// const RoleList = () => {
//   const { roles, deleteRole } = useContext(RoleContext);

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Role Name', width: 150 },
//     { field: 'permissions', headerName: 'Permissions', width: 200 },
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
//             onClick={() => deleteRole(params.row.id)}
//           >
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return <DataGrid rows={roles} columns={columns} pageSize={5} />;
// };

// export default RoleList;


import React, { useContext, useState } from 'react';
import { RoleContext } from '../../context/RoleContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import EditRoleForm from './EditRoleForm'; // Make sure the path is correct

const RoleList = () => {
  const { roles, deleteRole } = useContext(RoleContext);
  const [selectedRole, setSelectedRole] = useState(null);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Role Name', width: 150 },
    { field: 'permissions', headerName: 'Permissions', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 170,
      renderCell: (params) => (
        <>
          <Button
            startIcon={<Edit />}
            size="small"
            onClick={() => setSelectedRole(params.row)} // Set selected role for editing
          >
            Edit
          </Button>
          <Button
            startIcon={<Delete />}
            color="error"
            size="small"
            onClick={() => deleteRole(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  const handleCloseEditForm = () => {
    setSelectedRole(null); // Close the edit form when it's done
  };

  return (
    <div>
      <DataGrid rows={roles} columns={columns} pageSize={5} />

      {/* Conditionally render EditRoleForm if a role is selected */}
      {selectedRole && <EditRoleForm role={selectedRole} onClose={handleCloseEditForm} />}
    </div>
  );
};

export default RoleList;
