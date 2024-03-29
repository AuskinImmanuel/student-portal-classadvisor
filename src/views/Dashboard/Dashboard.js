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
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";

export default function Dashboard() {
  // Chakra Color Mode
  const toast = useToast()
  const textColor = useColorModeValue("gray.700", "white");
  const [ongo, setongo] = useState([])
  const [upco, setupco] = useState([])
  const [refresh, setrefresh] = useState([])

  const history = useHistory();

  useEffect(async () => {
    var email = localStorage.getItem("email")
    var auth_token = localStorage.getItem("token")
    var id  = localStorage.getItem("id")

    function refreshpage() {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var current = time.split(':',2)
      var st = "0"
        if(current[1]<10){
          current[1] = st+current[1]
        }
      current = current.join('.')
      if(refresh.length > 0){
        for (let i = 0; i < refresh.length; i++) {
          if (refresh[i]==current) {
            fetchdata()
          }
        }
      }
    }

    setInterval(()=>{
      refreshpage()
    },1000)

    let fetchdata = () =>{
      axios.post("http://localhost:5000/courses", {
      email,
      auth_token,
      courses : localStorage.getItem("courses"),
      id 
      }).then((items) => {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        function filters(value) {
          var current = time.split(':',2)
          var st = "0"
          if(current[1]<10){
            current[1] = st+current[1]
          }
          current = current.join('.')
          var start = (value.start_time).split(':',2).join(".") 
          var end = (value.end_time).split(':',2).join(".") 
          if(parseFloat(current) >= parseFloat(start) && parseFloat(current) <parseFloat(end)){
            refresh.push(end)
            return value;
          }
        }
        function filterz(value) {
          var current = time.split(':',2)
          var st = "0"
          if(current[1]<10){
            current[1] = st+current[1]
          }
          current = current.join('.')
          var start = (value.start_time).split(':',2).join(".")
          if(parseFloat(current)<parseFloat(start)){
            refresh.push(start)
            return value
          }
        }
        var new_arr = items.data.filter(filters)
        setongo(new_arr);
        var new_arrs = items.data.filter(filterz)
        setupco(new_arrs);
      });
    }
    fetchdata()
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
      >Logged in as : {localStorage.getItem("name")}</Text> 
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
            <div style={{width:"100%",cursor:"pointer"}} onClick={()=>{
              localStorage.setItem("dept",items.dept)
              localStorage.setItem("year",items.year)
              localStorage.setItem("sem",items.sem)
              localStorage.setItem("code",items.code)
              history.push("/admin/ExtracurricularData")
            }}>
              <Card minH="100px">
                <CardBody>
                <Flex
                  flexDirection="column"
                  align="left"
                  w="100%"
                >
                  <Text
                      mb="5px"
                      color={textColor}
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      {items.name} &nbsp;&nbsp;( {items.code} )
                  </Text>
                  <br/>
                  <Text
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
          </>
        )}

        <Text
          mb="15px"
          ms="4px"
          color={textColor}
          fontWeight="bold"
          fontSize="14px"
        >Upcoming Classes</Text>
        {upco.length > 0 ? (
            upco.map((items) => (
              <div style={{width:"25%",cursor:"pointer"}} onClick={()=>{toast({
                    title: `This is an upcoming event`,
                    status: 'info',
                    isClosable: true,
                  })}}>  
                
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
                            color={textColor}
                            fontWeight="bold"
                            fontSize="14px"
                          >
                            {items.name} &nbsp;&nbsp;( {items.code} )
                        </Text>
                        <br/>
                        <Text
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
              <marquee style={{color:"red"}}>No upcoming classes today</marquee>
            </>
        )}
      </SimpleGrid>
    </Flex>
  );
}
