
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { People, Security, Dashboard as DashboardIcon } from '@mui/icons-material';
import { mockFetch } from '../services/mockApi'; // Import mock API functions

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [roleCount, setRoleCount] = useState(0);
  const [permissionCount, setPermissionCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch data for users, roles, and permissions
        const usersResponse = await mockFetch('/users'); // Use mockFetch instead of getUsers
        const rolesResponse = await mockFetch('/roles'); // Use mockFetch instead of getRoles
        const permissionsResponse = await mockFetch('/permissions'); // Mock fetch for permissions

        // Set data in state
        setUserCount(usersResponse.length); // Assuming usersResponse is an array of users
        setRoleCount(rolesResponse.length); // Assuming rolesResponse is an array of roles
        setPermissionCount(permissionsResponse.length); // Assuming permissionsResponse is an array of permissions
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  // Stats array for displaying data in the cards
  const stats = [
    { label: 'Users', value: userCount, icon: <People /> },
    { label: 'Roles', value: roleCount, icon: <Security /> },
    { label: 'Permissions', value: permissionCount, icon: <DashboardIcon /> },
  ];

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {loading ? (
        // Display loading spinner while fetching data
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
              <CircularProgress />
            </CardContent>
          </Card>
        </Grid>
      ) : (
        // Render the stats once data is fetched
        stats.map((stat) => (
          <Grid item xs={12} sm={6} md={4} key={stat.label}>
            <Card>
              <CardContent>
                <Typography variant="h6">{stat.label}</Typography>
                <Typography variant="h4" color="primary">
                  {stat.value}
                </Typography>
                {stat.icon}
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Dashboard;
