import React, { createContext, useState, useEffect } from 'react';
import { mockFetch, mockPost, mockDelete } from '../services/mockApi';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    mockFetch('/roles').then(setRoles);
  }, []);

  const addRole = (role) =>
    mockPost('/roles', role).then(({ data }) => setRoles([...roles, { id: Date.now(), ...data }]));

  const updateRole = (updatedRole) =>
    setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));

  const deleteRole = (id) =>
    mockDelete(`/roles/${id}`).then(() => setRoles(roles.filter((role) => role.id !== id)));

  return (
    <RoleContext.Provider value={{ roles, addRole, updateRole, deleteRole }}>
      {children}
    </RoleContext.Provider>
  );
};
