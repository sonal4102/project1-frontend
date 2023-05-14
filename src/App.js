import React from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Route,
	
	Routes,
} from "react-router-dom";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";
import HomePage from "./component/HomePage";

const App = () => {
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
							<Route path="/" element={<LoginForm />} />
							<Route path="/signup" element={<SignupForm />} />
              <Route path="/home" element={<HomePage/>}/>
						</Routes>
					</Router>
				</Box>
			</Flex>
      
		</ChakraProvider>
	);
};



export default App;
