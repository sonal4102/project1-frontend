import React, { useState } from "react";
import {
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Link as ChakraLink,
    useToast,
} from "@chakra-ui/react";
import { Link, unstable_HistoryRouter } from "react-router-dom";

const LoginForm = () => {
    const toast = useToast()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const handleLogin = (e) => {
		e.preventDefault();

		fetch("http://localhost:5000/login-user", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userRegister");
                if (data.status == "success") {
                    toast({
                        title: 'Login Successful',
                        position: 'top-right',
                        description: "You have successfully logged in.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })

 window.location.href="/home"

                }
			})
			.catch((err) => {
				console.log(err);
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
			//   height="500px"
		>
			<Heading textAlign="center" mb={6} color="blue.500">
				Login
			</Heading>
			<form>
				<FormControl id="email" mb={4}>
					<FormLabel fontSize="lg">Email address</FormLabel>
					<Input
						type="email"
						borderColor="darkgray"
						height="50px"
						placeholder="
          Enter your email address
          "
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormControl>
				<FormControl id="password" mb={4}>
					<FormLabel fontSize="lg">Password</FormLabel>
					<Input
						type="password"
						borderColor="darkgray"
						height="50px"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormControl>
				<Button
					onClick={(e) => handleLogin(e)}
					colorScheme="blue"
					type="submit"
					w="100%"
					mt={6}
				>
					Sign In
				</Button>
			</form>
			<Box textAlign="center" mt={4}>
				<ChakraLink as={Link} to="/signup" color="blue.500">
					Not a user? Register here.
				</ChakraLink>
			</Box>
		</Box>
	);
};

export default LoginForm;
