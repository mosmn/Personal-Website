// pages/Home.tsx

import React from 'react';
import { Box, Heading, Text } from 'shadcn/ui';

const Home: React.FC = () => {
  return (
    <Box p="4">
      <Heading as="h1" size="2xl" mb="4">
        Mohamed
      </Heading>
      <Text fontSize="lg" mb="4">
        Full Stack Software Engineer
      </Text>
      <Text fontSize="xl">
        Welcome to my portfolio website! I specialize in building robust and scalable web applications with a focus on front-end and back-end development.
      </Text>
      {/* sections like projects, skills, etc. */}
    </Box>
  );
}

export default Home;
