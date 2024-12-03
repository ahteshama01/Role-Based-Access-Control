import React, { useState } from 'react';
import RoleList from '../components/RoleManagement/RoleList';
import AddRoleForm from '../components/RoleManagement/AddRoleForm';
import CustomModal from '../components/Shared/Modal';
import { Button } from '@mui/material';

const Roles = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleModalOpen}>
        Add Role
      </Button>
      <RoleList />
      <CustomModal open={isModalOpen} handleClose={handleModalClose} title="Add New Role">
        <AddRoleForm />
      </CustomModal>
    </div>
  );
};

export default Roles;
