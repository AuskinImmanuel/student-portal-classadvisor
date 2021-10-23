import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

function InternationalTableRow(props) {
  function fundelete(){
    let cid = {id};
    let params = new URLSearchParams;
    params.append("columnid",cid.id);
    axios.post("http://localhost:5000/InternationalExposureDelete",params);
  }
  const { id,row1, row2, row3, row4, row5, row6 } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row1}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row2}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row3}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row4}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row5}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row6}</Flex>
        </Flex>
      </Td>
      <Td>
      <Button bg="orange.300" alignSelf="flex-end" width="fit-content">
            Edit
      </Button>
      </Td>
      <Td>
      <Button onClick={fundelete} bg="orange.300" alignSelf="flex-end" width="fit-content">
            Delete
      </Button>
      </Td>
    </Tr>
  );
}

export default InternationalTableRow;
