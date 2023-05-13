import React from "react";
import { ChakraProvider, Box, Flex, Spacer, Link } from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	useNavigate,
	Routes,
} from "react-router-dom";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";

const App = () => {
	return (
		<ChakraProvider>
			<Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor={"#F5F5F5"}>
				<Box
					width="500px"
        
				>
					<Router>
						<Routes>
							<Route path="/" element={<LoginForm />} />
							<Route path="/signup" element={<SignupForm />} />
						</Routes>
					</Router>
				</Box>
			</Flex>
		</ChakraProvider>
	);
};

const AppContent = () => {
	const navigate = useNavigate();

	return (
		<Flex height="100vh" alignItems="center" justifyContent="center">
			<Box width="400px">
				<Route exact path="/">
					<LoginForm navigate={() => navigate("/signup")} />
				</Route>
				<Route path="/signup">
					<SignupForm navigate={() => navigate("/")} />
				</Route>
				<Box textAlign="center">
					<NavLink to="/signup" color="blue.500">
						Not a user? Create your account.
					</NavLink>
				</Box>
			</Box>
		</Flex>
	);
};

export default App;
