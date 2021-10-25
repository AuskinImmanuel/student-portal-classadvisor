import {
  Avatar,
  Badge,
  Button,
  Flex,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from "@chakra-ui/react";
import axios from "axios";
import React,{useState,useEffect} from "react";

function InternationalTableRow(props) {
  const [show, setShow] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function funedit() {
    let cid = {id};
    let cn = {row1};let cd={row2};let cp = {row3};let co = {row4};let cpd={row5};let cf={row6};
    let params = new URLSearchParams;
    params.append("columnid",cid.id);
    if(document.getElementById("ECID").value.length!==0)
    {
      params.append("campusname",document.getElementById("ECID").value);
    }
    else{
      params.append("campusname",cn.row1);
    }
    if(document.getElementById("EDID").value.length!==0)
    {
      params.append("dateyear",document.getElementById("EDID").value);
    }
    else{
      params.append("dateyear",cd.row2);
    }
    if(document.getElementById("EPID").value.length!==0)
    {
      params.append("project",document.getElementById("EPID").value);
    }
    else{
      params.append("project",cp.row3);
    }
    if(document.getElementById("EOID").value.length!==0)
    {
      params.append("outcome",document.getElementById("EOID").value);
    }
    else{
      params.append("outcome",co.row4);
    }
    if(document.getElementById("EPDID").value.length!==0)
    {
      params.append("personal",document.getElementById("EPDID").value);
    }
    else{
      params.append("personal",cpd.row5);
    }
    if(document.getElementById("EFID").value.length!==0)
    {
      params.append("foreign",document.getElementById("EFID").value);
    }
    else{
      params.append("foreign",cf.row6);
    }
    axios.post("http://localhost:5000/InternationalExposureEdit",params);
  }

  function fundelete(){
    let cid = {id};
    let params = new URLSearchParams;
    params.append("columnid",cid.id);
    axios.post("http://localhost:5000/InternationalExposureDelete",params);
  }

  function funverify(){
    let cid = {id};
    let params = new URLSearchParams;
    params.append("columnid",cid.id);
    params.append("verify","Verified");
    axios.post("http://localhost:5000/InternationalExposureVerify",params);
  }

  const { id,row1, row2, row3, row4, row5, row6, row7 } = props;
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
      <Td minWidth={{ sm: "200px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row7}</Flex>
        </Flex>
      </Td>
      <Td>
      <Button onClick={onOpen} bg="orange.300" alignSelf="flex-end" width="fit-content">
            Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Edit Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                        <Input
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={row1}
                        id="ECID"
                      />
                        <Input
                        marginTop="1em"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={row2}
                        id="EDID"
                      />
                      <Input
                        marginTop="1em"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={row3}
                        id="EPID"
                      />
                        <Input
                        marginTop="1em"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={row4}
                        id="EOID"
                      />
                        <Input
                        marginTop="1em"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={row5}
                        id="EPDID"
                      />
                        <Input
                        marginTop="1em"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={row6}
                        id="EFID"
                      />
                        </ModalBody>
                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={()=>{funedit();onClose();}}>
                            Submit
                          </Button>
                        </ModalFooter>
                      </ModalContent>
        </Modal>
      </Td>
      <Td>
      <Button onClick={fundelete} bg="orange.300" alignSelf="flex-end" width="fit-content">
            Delete
      </Button>
      </Td>
      <Td>
      <Button onClick={funverify} bg="orange.300" alignSelf="flex-end" width="fit-content" disabled={({row7}=="Verified")? false : true}>
            Verify
      </Button>
      </Td>
    </Tr>
  );
}

export default InternationalTableRow;
