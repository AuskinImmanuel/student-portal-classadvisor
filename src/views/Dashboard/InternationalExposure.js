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
  Select,
  SimpleGrid,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
// Custom components
import { SearchIcon } from "@chakra-ui/icons";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import StudentListInternational from "components/Tables/StudentListInternational";

function InternationalExposure() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {
    axios.get("http://localhost:5000/InternationalExpo").then((items) => {
      setData(items.data);
      console.log(items.data);
    });
  }, []);

  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              International Exposure
            </Text>
          </Flex>
        </CardBody>

        <CardHeader mt="1em">
          <Text fontSize="lg" color={textColor} fontWeight="semi">
            Search Student
          </Text>
        </CardHeader>

        <InputGroup
          bg={inputBg}
          mt="1rem"
          borderRadius="15px"
          w="cover"
          _focus={{
            borderColor: { mainorange },
          }}
          _active={{
            borderColor: { mainorange },
          }}
        >
          <InputLeftElement
            children={
              <IconButton
                bg="inherit"
                borderRadius="inherit"
                _hover="none"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
              ></IconButton>
            }
          />

          <Input
            onChange={(event) => setSearchTerm(event.target.value)}
            fontSize="xs"
            py="11px"
            placeholder="Type here..."
            borderRadius="inherit"
            value={searchTerm}
          />
        </InputGroup>

        <Button
          mt="1em"
          onClick="m"
          colorScheme="orange"
          alignSelf="flex-end"
          variant="solid"
          width="25%"
        >
          Download Report
        </Button>
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
              {data
                .filter((item) => {
                  if (searchTerm == "") {
                    return item;
                  } else if (
                    item.sname
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.roll_no
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.batch
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.reg_no
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => {
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
