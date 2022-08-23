// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  NumberInputStepper,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Dashboard() {
  // Chakra Color Mode
  const textColor = useColorModeValue("gray.700", "white");
  const [ongo, setongo] = useState([])
  const history = useHistory();

  useEffect(async () => {
    var email = localStorage.getItem("email")
    var auth_token = localStorage.getItem("token")
    var id  = localStorage.getItem("id")

    axios.post("http://localhost:5000/courses", {
      email,
      auth_token,
      courses : localStorage.getItem("courses"),
      id 
    }).then((items) => {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      function filters(value) {
        return time>=value.start_time && time<=value.end_time;
      }
      var new_arr = items.data.filter(filters)
      setongo(new_arr);
    });
  }, []);

  const overlayRef = React.useRef();

  return (
    <Flex flexDirection="column" pt={{ base: "500px", md: "75px" }}>
     <Text
        mb="15px"
        ms="4px"
        color={textColor}
        fontWeight="bold"
        fontSize="14px"
      >Ongoing Classes</Text>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing="24px">
        {ongo.length > 0 ? (
          ongo.map((items) => (
            <div style={{width:"25%",cursor:"pointer"}} onClick={()=>{
              history.push("/admin/ExtracurricularData")
            }}>
              <Card minH="100px">
                <CardBody>
                <Flex
                  flexDirection="column"
                  align="left"
                  // justify="center"
                  w="100%"
                >
                  <Text
                      mb="5px"
                      // ms="4px"
                      color={textColor}
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      {items.name} &nbsp;&nbsp;( {items.code} )
                  </Text>
                  <br/>
                  <Text
                      // ms="4px"
                      color={textColor}
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      {"Staff Name : "} &nbsp;&nbsp; {localStorage.getItem("name")} 
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </div>
        )) 
        ) : (
          <>
          <marquee style={{color:"red"}}>No ongoing classes today</marquee>
            {/* <Text
            mb="36px"
            ms="4px"
            color={"red.500"}
            fontWeight="bold"
            fontSize="14px"
            >
            {"No ongoing classes today"}
            </Text> */}
          </>
        )}

      <div style={{width:"25%"}}>  
      <Text
        mb="15px"
        ms="4px"
        color={textColor}
        fontWeight="bold"
        fontSize="14px"
      >Upcoming Classes</Text>
        <marquee style={{color:"red"}}>No upcoming classes today</marquee>
        {/* <Card minH="100px">
          <CardBody>
            <Flex
              flexDirection="column"
              align="left"
              // justify="center"
              w="100%"
            >
              <Text
                // mb="36px"
                // ms="4px"
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                {"names"}
              </Text>
            </Flex>
          </CardBody>
        </Card> */}
      </div>

        {/* <Card minH="300px">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Stat mr="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb="1.5rem"
                >
                  Internships
                </StatLabel>
              </Stat>
              <BarChart />
            </Flex>
          </CardBody>
        </Card> */}
      </SimpleGrid>
    </Flex>
  );
}
