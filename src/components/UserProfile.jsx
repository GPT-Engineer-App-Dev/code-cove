import React from 'react';
import { Box, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";

const UserProfile = ({ enrollments }) => {
  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg">Your Profile</Heading>
        <Text>Welcome to your learning dashboard!</Text>
        <Box>
          <Heading as="h3" size="md">Enrolled Courses</Heading>
          {enrollments.length > 0 ? (
            <UnorderedList>
              {enrollments.map((course, index) => (
                <ListItem key={index}>{course}</ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Text>You are not enrolled in any courses yet.</Text>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default UserProfile;