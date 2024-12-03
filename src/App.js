// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../components/Shared/Navbar';
// import Sidebar from '../components/Shared/Sidebar';
// import Dashboard from '../pages/Dashboard';
// import Users from '../pages/Users';
// import Roles from '../pages/Roles';
// import { UserProvider } from '../context/UserContext';
// import { RoleProvider } from '../context/RoleContext';
// import { PermissionProvider } from '../context/PermissionContext'; // Import PermissionProvider

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       {/* Wrap the app with UserProvider, RoleProvider, and PermissionProvider */}
//       <UserProvider>
//         <RoleProvider>
//           <PermissionProvider> {/* Wrap the app components with PermissionProvider */}
//             <Navbar
//               toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//               toggleTheme={() => setDarkMode(!darkMode)}
//               darkMode={darkMode}
//             />
//             <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//             <div style={{ padding: '20px', marginLeft: sidebarOpen ? '240px' : '0' }}>
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/users" element={<Users />} />
//                 <Route path="/roles" element={<Roles />} />
//               </Routes>
//             </div>
//           </PermissionProvider> {/* End of PermissionProvider */}
//         </RoleProvider>
//       </UserProvider>
//     </Router>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Shared/Navbar'; // Corrected the path
// import Sidebar from './components/Shared/Sidebar'; // Corrected the path
// import Dashboard from './pages/Dashboard'; // Corrected the path
// import Users from './pages/Users'; // Corrected the path
// import Roles from './pages/Roles'; // Corrected the path
// import { UserProvider } from './context/UserContext'; // Corrected the path
// import { RoleProvider } from './context/RoleContext'; // Corrected the path
// import { PermissionProvider } from './context/PermissionContext'; // Corrected the path

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       {/* Wrap the app with UserProvider, RoleProvider, and PermissionProvider */}
//       <UserProvider>
//         <RoleProvider>
//           <PermissionProvider> {/* Wrap the app components with PermissionProvider */}
//             <Navbar
//               toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//               toggleTheme={() => setDarkMode(!darkMode)}
//               darkMode={darkMode}
//             />
//             <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//             <div style={{ padding: '20px', marginLeft: sidebarOpen ? '240px' : '0' }}>
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/users" element={<Users />} />
//                 <Route path="/roles" element={<Roles />} />
//               </Routes>
//             </div>
//           </PermissionProvider> {/* End of PermissionProvider */}
//         </RoleProvider>
//       </UserProvider>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';
import NotFound from './pages/NotFound'; // A 404 page component
import { UserProvider } from './context/UserContext';
import { RoleProvider } from './context/RoleContext';
import { PermissionProvider } from './context/PermissionContext';
import ErrorBoundary from './components/Shared/ErrorBoundary'; // Error boundary component

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    // Load the sidebar state from localStorage
    const savedState = localStorage.getItem('sidebarOpen');
    return savedState ? JSON.parse(savedState) : false;
  });

  const [darkMode, setDarkMode] = useState(false);

  // Save sidebar state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // Create themes for light and dark modes
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize browser styling */}
      <Router>
        <UserProvider>
          <RoleProvider>
            <PermissionProvider>
              <ErrorBoundary>
                <Navbar
                  toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                  toggleTheme={() => setDarkMode(!darkMode)}
                  darkMode={darkMode}
                />
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div style={{ padding: '20px', marginLeft: sidebarOpen ? '240px' : '0', transition: 'margin-left 0.3s' }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/roles" element={<Roles />} />
                    <Route path="*" element={<NotFound />} /> {/* Handle undefined routes */}
                  </Routes>
                </div>
              </ErrorBoundary>
            </PermissionProvider>
          </RoleProvider>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;

