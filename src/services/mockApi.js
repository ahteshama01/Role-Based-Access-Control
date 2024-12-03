// export const mockFetch = async (endpoint) => {
//     const mockData = {
//       '/users': [
//         { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//       ],
//       '/roles': [
//         { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
//       ],
//     };
//     return new Promise((resolve) => setTimeout(() => resolve(mockData[endpoint]), 500));
//   };
  
//   export const mockPost = async (endpoint, data) => {
//     return new Promise((resolve) =>
//       setTimeout(() => resolve({ success: true, data }), 500)
//     );
//   };
  
//   export const mockDelete = async (endpoint) => {
//     return new Promise((resolve) =>
//       setTimeout(() => resolve({ success: true }), 500)
//     );
//   };
  


// export const mockFetch = async (endpoint) => {
//   const mockData = {
//     '/users': [
//       { id: 1, name: 'frikky', email: 'frikky@gmail.com', role: 'Admin', status: 'Active' },
//     ],
//     '/roles': [
//       { id: 1, name: 'Frikky', permissions: ['read', 'write', 'delete'] },
//     ],
//     '/permissions': [
//       { id: 1, name: 'read', description: '' },
//       { id: 2, name: 'write', description: '' },
//       { id: 3, name: 'delete', description: '' },
//     ],
//   };
//   return new Promise((resolve) => setTimeout(() => resolve({ data: mockData[endpoint] }), 500));
// };

// export const mockPost = async (endpoint, data) => {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ success: true, data }), 500)
//   );
// };

// export const mockDelete = async (endpoint) => {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ success: true }), 500)
//   );
// };



// Mock Fetch Function
export const mockFetch = async (endpoint) => {
  const mockData = {
    '/users': [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    ],
    '/roles': [
      { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    ],
    '/permissions': [
      { id: 1, name: 'Read' },
      { id: 2, name: 'Write' },
      { id: 3, name: 'Delete' },
    ],
  };
  return new Promise((resolve) => setTimeout(() => resolve(mockData[endpoint]), 500));
};

// Mock Post Function
export const mockPost = async (endpoint, data) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, data }), 500)
  );
};

// Mock Delete Function
export const mockDelete = async (endpoint) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 500)
  );
};
