import React from 'react';
import { Box, Center, Container } from '@chakra-ui/react';
import ImageUploadSection from './ImageUploadSection';
import UserDetail from './UserDetail';
import Logout from './Logout';

function HomePage() {
  return (

      <Container>
        
          <UserDetail />
          <ImageUploadSection />
 <Logout/>
      </Container>

  );
}

export default HomePage;
