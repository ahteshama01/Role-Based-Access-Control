import React, { useState } from 'react';
import UserList from '../components/UserManagement/UserList';
import AddUserForm from '../components/UserManagement/AddUserForm';
import CustomModal from '../components/Shared/Modal';
import { Button } from '@mui/material';

const Users = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleModalOpen}>
        Add User
      </Button>
      <UserList />
      <CustomModal open={isModalOpen} handleClose={handleModalClose} title="Add New User">
        <AddUserForm />
      </CustomModal>
    </div>
  );
};

export default Users;
