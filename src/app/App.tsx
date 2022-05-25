import React from 'react';

import { observer } from 'mobx-react-lite';

import { Grid } from '@mui/material';
import { Todos } from './modules/todos/ui/Todos/Todos';
import { Users } from './modules/users/ui/Users/Users';
import { UserInfo } from './modules/userInfo/ui/UserInfo/UserInfo';

export const App = observer(function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Users />
      </Grid>
      <Grid item xs={3}>
        <UserInfo />
      </Grid>
      <Grid item xs={4}>
        <Todos />
      </Grid>
    </Grid>
  );
});
