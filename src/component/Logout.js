import { Button, Flex } from "@chakra-ui/react";
import React from "react";

function Logout() {

    const handleClick=()=>{
        window.localStorage.clear()
        window.location.href="/"
    }

	return (
		<Flex
			position="fixed"
			bottom="20px"
			left="50%"
			transform="translateX(-50%)"
			alignItems="center"
		>
			<Button colorScheme="teal" variant="outline" onClick={()=>handleClick()}>
				Logout
			</Button>
		</Flex>
	);
}

export default Logout;
