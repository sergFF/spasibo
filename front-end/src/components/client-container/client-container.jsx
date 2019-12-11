import React from 'react';
import {Box} from '@material-ui/core';

const ClientContainer = ({children}) => (
  <Box>
    <header className="App-header" />
    {children}
  </Box>
);

export default ClientContainer
