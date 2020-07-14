import React from 'react';
import { Container } from 'reactstrap'

import Drawer from './components/Drawer/CustomDrawer'

function App() {
  return (
    <Container fluid={true}>
      <Drawer />
    </Container>
  );
}

export default App;
