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
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Button,
  ButtonGroup,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesTableData1 } from "variables/general";
import Upload from "components/Upload/Upload";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";

function GeneralInformation() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    axios.get("http://localhost:5000/General").then((items) => {
      setData(items.data);
    });
    console.log(data);
  });
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              General Information
            </Text>
          </Flex>
        </CardBody>
        <Card>
          <CardHeader>Searh Student</CardHeader>
          <SearchBar />
        </Card>
        <Upload />
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
                <Th color="gray.400">S.No.</Th>
                <Th pl="0px" color="gray.400">
                  Name
                </Th>
                <Th color="gray.400">Resitration Number</Th>
                <Th color="gray.400">Roll Number</Th>
                <Th color="gray.400">Email</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                  <TablesTableRow
                    sno={item.sno}
                    name={item.name}
                    reg={item.reg}
                    email={item.email}
                    roll={item.roll}
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

export default GeneralInformation;
