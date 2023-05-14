import React, { useState, useEffect } from 'react';
import { Box, Center, Container, Spinner } from '@chakra-ui/react';
import ImageUploadSection from './ImageUploadSection';
import UserDetail from './UserDetail';
import Logout from './Logout';

function HomePage() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      {showSpinner ? (
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Box>
      ) : (
        <>
          <UserDetail />
          <ImageUploadSection />
          <Logout />
        </>
      )}
    </Container>
  );
}

export default HomePage;
