import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function UserDetail() {
	const [userData, setUserData] = useState("");
	useEffect(() => {
		fetch("http://localhost:5000/userData", {
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
