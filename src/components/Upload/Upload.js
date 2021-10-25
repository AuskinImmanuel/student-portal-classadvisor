import React, { useState, useEffect } from "react";
import MyPDF from "../Template/academic_details.xlsx";
import axios from "axios";

// Chakra imports
import {
  Flex,
  SimpleGrid,
  Button,
  useDisclosure,
  Collapse,
  Box,
  Input,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function Upload(event) {
  //var myfile = event.target.files[0];
  //console.log(myfile.name);
  // let state = {
  //
  //   // Initially, no file is selected
  //   selectedFile: null
  // };

  //const [selectedFile,setSelectedFile] = useState({selectedFile1:null});

  // On file select (from the pop up)
  let onFileChange = (event) => {
    console.log("Hello");
    // Update the state
    console.log(event.target.files);
    //setSelectedFile({selectedFile1:event.target.files[0]});
    //console.log(selectedFile1);
    onFileUpload(event.target.files[0]);
  };

  // On file upload (click the upload button)
  let onFileUpload = (file) => {
    // // Create an object of formData
    const formData = new FormData();
    //
    // // Update the formData object
    formData.append("excel", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    //
    // // Details of the uploaded file
    // console.log(formData);
    //const formData = ["academic_details.xlsx"]
    // console.log(formData)
    //console.log(selectedFile)
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:5000/upload", formData, config);
  };

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column">
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
        <a href={MyPDF} download="academic_details.xlsx">
          <Button colorScheme="orange" variant="solid" width="100%">
            Download Template
          </Button>
        </a>

        <Button
          onClick={onToggle}
          colorScheme="orange"
          variant="solid"
          width="100%"
        >
          Upload
        </Button>
      </SimpleGrid>
      <Collapse in={isOpen} animateOpacity>
        <Card
          p="40px"
          color="white"
          mt="4"
          bg="orange.300"
          rounded="md"
          shadow="md"
        >
          <Input width="50%" type="file" onChange={onFileChange} />
          <Button ms="4" marginTop="2" bg="gray.700" width="fit-content">
            Confirm
          </Button>
        </Card>
      </Collapse>
    </Flex>
  );
}

export default Upload;
