import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link as ChakraLink,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const deployURL = "https://sonalsingh-project1.onrender.com";
const deployed = true;
const API_URL = deployed ? deployURL : "http://localhost:5000";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleRegistration = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(firstName, lastName, email, password);
    fetch(`${API_URL}/register`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "success") {
          toast({
            title: "Account created.",
            position: "top-right",
            description: "We've created an account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
        window.location.href = "/";
        window.localStorage.setItem("email", data.data.email);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box
      maxW="500px"
      mx="auto"
      p={12}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      backgroundColor="white"
    >
      <Heading textAlign="center" mb={6} color="blue.500">
        Signup
      </Heading>
      <form>
        <FormControl id="name" mt={4}>
          <FormLabel fontSize="lg">First Name</FormLabel>
          <Input
            type="text"
            borderColor="darkgray"
            height="50px"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl id="name" mt={4}>
          <FormLabel fontSize="lg">Last Name</FormLabel>
          <Input
            type="text"
            borderColor="darkgray"
            height="50px"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" mt={4}>
          <FormLabel fontSize="lg">Email address</FormLabel>
          <Input
            type="email"
            borderColor="darkgray"
            height="50px"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel fontSize="lg">Password</FormLabel>
          <Input
            type="password"
	
			borderColor="darkgray"
			height="50px"
			placeholder="Create your password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		  />
		</FormControl>
		<Button
		  onClick={(e) => handleRegistration(e)}
		  colorScheme="blue"
		  type="submit"
		  w="100%"
		  mt={6}
		  disabled={isLoading}
		>
		  {isLoading ? <Spinner size="sm" /> : "Sign Up"}
		</Button>
	  </form>
	  <Box textAlign="center" mt={4}>
		<ChakraLink as={Link} to="/" color="blue.500">
		  Already a user? Login from here.
		</ChakraLink>
	  </Box>
	</Box>
	
	);
};

export default SignupForm;
