import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const deployURL = "https://sonalsingh-project1.onrender.com";
const deployed = true;
const API_URL = deployed ? deployURL : "http://localhost:5000";
function UserDetail() {
	const [userData, setUserData] = useState("");
	useEffect(() => {
		fetch(`${API_URL}/userData`, {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				token: window.localStorage.getItem("token"),
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userRegister");
				if (data.status == "success") {
					console.log({ data });
					window.localStorage.setItem("email", data.data.email);
					setUserData(data.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<Box
			p={4}
			borderWidth="1px"
			borderRadius="md"
			shadow="md"
			backgroundColor="white"
		>
			<Heading size="lg" mb={2}>
				Hello, {userData.fname} {userData.lname}!
			</Heading>
		</Box>
	);
}

export default UserDetail;
