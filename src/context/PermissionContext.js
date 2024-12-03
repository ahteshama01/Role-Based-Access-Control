import React, { createContext, useState, useContext } from 'react';

// Create the PermissionContext
const PermissionContext = createContext();

// Custom hook to use the PermissionContext
export const usePermissionContext = () => {
  return useContext(PermissionContext);
};

// Permission Provider Component
export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'Read', description: 'Can read resources' },
    { id: 2, name: 'Write', description: 'Can create and edit resources' },
    { id: 3, name: 'Delete', description: 'Can delete resources' },
  ]);

  // Add a new permission
  const addPermission = (permission) => {
    setPermissions((prevPermissions) => [
      ...prevPermissions,
      { id: prevPermissions.length + 1, ...permission },
    ]);
  };

  // Edit an existing permission
  const editPermission = (id, updatedPermission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((perm) =>
        perm.id === id ? { ...perm, ...updatedPermission } : perm
      )
    );
  };

  // Delete a permission
  const deletePermission = (id) => {
    setPermissions((prevPermissions) =>
      prevPermissions.filter((perm) => perm.id !== id)
    );
  };

  // Provide values to the context consumers
  return (
    <PermissionContext.Provider
      value={{ permissions, addPermission, editPermission, deletePermission }}
    >
      {children}
    </PermissionContext.Provider>
  );
};
