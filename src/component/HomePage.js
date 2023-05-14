import React from 'react';
import { Box, Center, Container } from '@chakra-ui/react';
import ImageUploadSection from './ImageUploadSection';
import UserDetail from './UserDetail';

function HomePage() {
  return (

      <Container>
        
          <UserDetail />
          <ImageUploadSection />
 
      </Container>

  );
}

export default HomePage;
