import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, useEffect } from 'react';
import ROUTES_USERS from './routes';
import UsersPage from './components/UsersPage';

const UsersContainer = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userUpdates, setUserUpdates] = useState([]);

  const refreshDetails = () => {
    setLoading(true);
    axios.get(ROUTES_USERS.LIST).then((listResponse) => {
      setUsers(listResponse.data);
    });
  };

  useEffect(() => {
    refreshDetails();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    );
  }
  return (
    <div className="row">
      <UsersPage users={users} userUpdates={userUpdates} setUserUpdates={setUserUpdates} />
    </div>
  );
};
export default withRouter(UsersContainer);