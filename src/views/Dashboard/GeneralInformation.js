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
    let params = new URLSearchParams();
    params.append("dept", "CSE");
    params.append("batch", "2019-2023");
    axios.post("http://localhost:5000/General", params).then((items) => {
      setData(items.data);
    });
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
              <Tr my=".8rem" color="gray.400">
                <Th color="gray.400">Name</Th>
                <Th color="gray.400">Resitration Number</Th>
                <Th color="gray.400">Roll Number</Th>
                <Th color="gray.400">Email</Th>
                <Th color="gray.400">Department</Th>
                <Th color="gray.400">Batch</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                  <TablesTableRow
                    name={item.sname}
                    reg={item.reg_no}
                    email={item.licet_email}
                    roll={item.roll_no}
                    dept={item.dept}
                    batch={item.batch}
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
