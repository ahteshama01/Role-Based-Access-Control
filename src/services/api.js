// // services/api.js

// import axios from 'axios';

// // Mock API call to get users
// export const getUsers = async () => {
//   try {
//     const response = await axios.get('/api/users'); // Replace with your actual API endpoint
//     return response;
//   } catch (error) {
//     throw new Error('Error fetching users');
//   }
// };

// // Mock API call to get roles
// export const getRoles = async () => {
//   try {
//     const response = await axios.get('/api/roles'); // Replace with your actual API endpoint
//     return response;
//   } catch (error) {
//     throw new Error('Error fetching roles');
//   }
// };

// // Mock API call to get permissions
// export const getPermissions = async () => {
//   try {
//     const response = await axios.get('/api/permissions'); // Replace with your actual API endpoint
//     return response;
//   } catch (error) {
//     throw new Error('Error fetching permissions');
//   }
// };



// // api.js
// import axios from 'axios';

// // Fetch users from the API
// export const getUsers = async () => {
//   try {
//     const response = await axios.get('/api/users'); // Replace with your actual endpoint
//     return response;
//   } catch (error) {
//     throw new Error('Error fetching users');
//   }
// };

// // Fetch roles from the API
// export const getRoles = async () => {
//   try {
//     const response = await axios.get('/api/roles'); // Replace with your actual endpoint
//     return response;
//   } catch (error) {
//     throw new Error('Error fetching roles');
//   }
// };

// // Fetch permissions from the API
// export const getPermissions = async () => {
//   try {
//     const response = await axios.get('/api/permissions'); // Replace with your actual endpoint
//     return response;
//   } catch (error) {
//     throw new Error('Error fetching permissions');
//   }
// };





import axios from 'axios';

// Fetch users from the API
export const getUsers = async () => {
  try {
    const response = await axios.get('/api/users'); // Replace with your actual API endpoint
    return response;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

// Fetch roles from the API
export const getRoles = async () => {
  try {
    const response = await axios.get('/api/roles'); // Replace with your actual API endpoint
    return response;
  } catch (error) {
    throw new Error('Error fetching roles');
  }
};

// Fetch permissions from the API
export const getPermissions = async () => {
  try {
    const response = await axios.get('/api/permissions'); // Replace with your actual API endpoint
    return response;
  } catch (error) {
    throw new Error('Error fetching permissions');
  }
};
