import React from 'react';
import { Box, Grommet, Heading, Paragraph } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

const App = () => {
  return (
    <Grommet theme={hpe}>
      <Box>
        <Heading level="1">Hello HPExs</Heading>
        <Paragraph>Welcome to HPE Server</Paragraph>
      </Box>
    </Grommet>
  );
};

export default App;