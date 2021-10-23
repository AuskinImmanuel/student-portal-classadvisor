import React, { useState, useEffect } from "react";
import axios from 'axios';
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
  FormLabel,
  Select,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import StudentListInternational from "components/Tables/StudentListInternational";
import { tablesTableData4 } from "variables/general";
import Selection from "components/Select/Selection";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";

function InternationalExposure() {

  const [data, setData] = useState([]);
  useEffect(async () => {
    axios.get("http://localhost:5000/InternationalExpo").then((items) => {
      setData(items.data);
      console.log(items.data);
    });
  },[]);


  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              International Exposure
            </Text>
            <Card>
              <CardHeader>Searh Student</CardHeader>
              <SearchBar />
              <br />
              <Button
                colorScheme="orange"
                alignSelf="flex-end"
                variant="solid"
                width="25%"
              >
                Download
              </Button>
            </Card>
          </Flex>
        </CardBody>
      </Card>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Students List
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">Roll No.</Th>
                <Th color="gray.400">Name</Th>
                <Th color="gray.400">Register No</Th>
                <Th color="gray.400">Batch</Th>
                <Th color="gray.400">Email</Th>
              </Tr>
            </Thead>
            <Tbody>
            {data.map((item) => {
                return (
                  <StudentListInternational
                    roll={item.roll_no}
                    name={item.sname}
                    reg={item.reg_no}
                    batch={item.batch}
                    email={item.licet_email}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default InternationalExposure;
