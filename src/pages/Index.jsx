import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, Image, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import CodeEditor from '../components/CodeEditor';
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const Feature = ({ title, icon, children }) => {
  return (
    <VStack>
      <Box fontSize="3xl" color="blue.500">
        {icon}
      </Box>
      <Text fontWeight="bold" fontSize="xl">{title}</Text>
      <Text textAlign="center">{children}</Text>
    </VStack>
  );
};

const CourseCard = ({ title, description, image }) => {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg={bg}>
      <Image src={image} alt={title} mb={4} />
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text>{description}</Text>
      <Button mt={4} colorScheme="blue">Start Learning</Button>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} alignItems="flex-start">
            <Heading as="h1" size="2xl">Master Coding with Our Online Learning Platform</Heading>
            <Text fontSize="xl">Learn, practice, and excel in various programming languages and technologies.</Text>
            <Button size="lg" colorScheme="whiteAlpha">Get Started</Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl">Why Choose Our Platform?</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature icon={<FaCode />} title="Interactive Coding">
                Practice coding in real-time with our interactive code editor.
              </Feature>
              <Feature icon={<FaLaptopCode />} title="Project-Based Learning">
                Apply your skills to real-world projects and build your portfolio.
              </Feature>
              <Feature icon={<FaUserGraduate />} title="Expert Instructors">
                Learn from industry professionals and experienced developers.
              </Feature>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Featured Courses Section */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl">Featured Courses</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <CourseCard 
                title="JavaScript Fundamentals" 
                description="Master the basics of JavaScript and start building interactive web applications."
                image="https://via.placeholder.com/300x200?text=JavaScript+Course"
              />
              <CourseCard 
                title="Python for Data Science" 
                description="Learn Python programming and its applications in data analysis and machine learning."
                image="https://via.placeholder.com/300x200?text=Python+Course"
              />
              <CourseCard 
                title="Full Stack Web Development" 
                description="Become a full stack developer with our comprehensive web development course."
                image="https://via.placeholder.com/300x200?text=Web+Development+Course"
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Code Editor Section */}
      <Box py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading as="h2" size="xl">Try Our Code Editor</Heading>
            <Text fontSize="lg" textAlign="center">
              Practice coding directly in your browser with our interactive code editor.
            </Text>
            <CodeEditor />
          </VStack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} alignItems="center">
            <Heading as="h2" size="xl" textAlign="center">Ready to Start Your Coding Journey?</Heading>
            <Text fontSize="xl" textAlign="center">Join thousands of students who have transformed their careers through our platform.</Text>
            <Button size="lg" colorScheme="blue">Enroll Now</Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;