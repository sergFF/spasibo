import React, { useEffect } from 'react';
import {Box} from '@material-ui/core';

const AdminContainer = ({children}) => (
    <Box>
      <header className="App-header" />
      {children}
    </Box>
  );

export default AdminContainer;
