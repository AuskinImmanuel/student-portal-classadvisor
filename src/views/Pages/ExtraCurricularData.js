import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  FormControl,
  Button,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ExtraCurricualarTableRow from "components/Tables/ProfessionalDevelopmentTablerow";
import { Clubs } from "variables/general";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

function ExtraCurricularData() {
  function submit() {
    var email = localStorage.getItem("email")
    var auth_token = localStorage.getItem("token")
    var data = JSON.stringify([present])
    axios.post("http://localhost:5000/attendance", {
      email,
      auth_token,
      data
    })
  }

  const [data, setdata] = useState([])
  const [present, setpresent] = useState({})

  useEffect(async () => {
    var email = localStorage.getItem("email")
    var auth_token = localStorage.getItem("token")
    var dept = localStorage.getItem("dept")
    var year = localStorage.getItem("year")
    var sem = localStorage.getItem("sem")

    axios.post("http://localhost:5000/getdetails", {
      email,
      auth_token,
      dept,
      year,
      sem
    }).then((items) => {
      for (let i = 0; i < items.data.length; i++) {
        present[items.data[i].register_no] = 0        
      }
      setdata(items.data);
    });
  }, [])

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "400px", md: "75px" }}>
      <Grid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Attendance Upload
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Student Name</Th>
                    <Th color="gray.400">Register No</Th>
                    <Th color="gray.400">Roll No</Th>
                    <Th color="gray.400">Departemnt</Th>
                    <Th color="gray.400">Present/Absent</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length > 0 ? (
                    data.map((items) => (
                      <Tr>
                         <Th color="white.100">{items.name}</Th>
                         <Th color="white.100">{items.register_no}</Th>
                         <Th color="white.100">{items.roll_no}</Th>
                         <Th color="white.100">{items.dept}</Th>
                         <Th><Checkbox onChange={(e)=>{
                          if(e.target.checked === true) {
                            present[items.register_no] = 1
                          }
                          if(e.target.checked === false) {
                            present[items.register_no] = 0
                          }
                         }}></Checkbox></Th>
                      </Tr>
                    ))
                  ) : (<></>) }
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <Button
          mt="1em"
          colorScheme="orange"
          alignSelf="flex-end"
          variant="solid"
          width="10%"
          onClick={()=>{submit()}}
        >
          Submit
        </Button>
      </Grid>
    </Flex>
  );
}

export default ExtraCurricularData;
