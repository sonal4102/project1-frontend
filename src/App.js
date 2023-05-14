import React from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";
import HomePage from "./component/HomePage";

const App = () => {
	const isloggedIn = window.localStorage.getItem("loggedIn");
	return (
		<ChakraProvider>
			<Flex
				height="100vh"
				alignItems="center"
				justifyContent="center"
				backgroundColor={"#F5F5F5"}
			>
				<Box width="500px">
					<Router>
						<Routes>
							<Route
								path="/"
								element={
									isloggedIn ? <HomePage /> : <LoginForm />
								}
							/>
							<Route path="/signup" element={<SignupForm />} />
				
						</Routes>
					</Router>
				</Box>
			</Flex>
		</ChakraProvider>
	);
};

export default App;
