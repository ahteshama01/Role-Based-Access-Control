import React, { createContext, useState, useEffect } from 'react';
import { mockFetch, mockPost, mockDelete } from '../services/mockApi';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    mockFetch('/users').then(setUsers);
  }, []);

  const addUser = (user) =>
    mockPost('/users', user).then(({ data }) => setUsers([...users, { id: Date.now(), ...data }]));

  const updateUser = (updatedUser) =>
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));

  const deleteUser = (id) =>
    mockDelete(`/users/${id}`).then(() => setUsers(users.filter((user) => user.id !== id)));

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
