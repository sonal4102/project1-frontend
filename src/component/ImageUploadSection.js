import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

export default function ImageUploadSection() {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);


  function covertToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getImage();
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  function uploadImage() {
    if (image) {
      fetch("http://localhost:5000/upload-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          base64: image,
          email: window.localStorage.getItem("email"),
        }),
      })
        .then((res) => 
        
        res.json())
        .then((data) => {
          console.log(data);
          getImage();
          setImage(""); 
        });
    }
  }

  function getImage() {
    axios.get('http://localhost:5000/get-image', {
      params: {
       email:window.localStorage.getItem("email")
      
      }
    })
    .then(response => {
      console.log(response.data);
      setAllImage(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }


  //   fetch("http://localhost:5000/get-image", {
  //     method: "GET",
     
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAllImage(data.data);
  //     });
  // }

  return (
    <>
      <Container my="12">
        <Box
          position="relative"
          border="1px solid grey"
          borderRadius="5px"
          width="50%"
          mx="auto"
        >
          <Stack p="2" textAlign="center">
            <Text fontWeight="bold">Select File/Image</Text>
          </Stack>
          <Input
            type="file"
            position="absolute"
            top="0"
            left="0"
            opacity="0"
            aria-hidden="true"
            accept="image/*"
            onDragEnter={startAnimation}
            onDragLeave={stopAnimation}
            onChange={covertToBase64}
          />
        </Box>
      </Container>
      <Container>
        {image ? (
          <Image src={image} height={40} alt="image" />
        ) : null}
        <Button
          colorScheme="blue"
          mx="auto"
          display="block"
          mt={4}
          onClick={uploadImage}
          disabled={!image}
        >
          Upload your image
        </Button>
      </Container>
      <Container overflow="auto" maxH={280} p={0} position="relative">
        <SimpleGrid columns={4} spacing={4} p={4}>
          {allImage.map((data, index) => (
            <Box key={index} height="80px" position="relative">
              <Image
                height="100%"
                width="100%"
                src={data.image}
                objectFit="cover"
                borderRadius="md"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
