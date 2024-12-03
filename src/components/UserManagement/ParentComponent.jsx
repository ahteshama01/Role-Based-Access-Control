import React, { useState } from 'react';
import AddUserForm from './AddUserForm';  // Adjust the path as necessary
import { Button } from '@mui/material';

const ParentComponent = () => {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  // Handle opening the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Handle closing the modal from child component
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <Button variant="contained" onClick={handleOpenModal}>
        Add New User
      </Button>

      {/* Conditionally render the AddUserForm modal */}
      {openModal && <AddUserForm onClose={handleCloseModal} />}
    </div>
  );
};

export default ParentComponent;
