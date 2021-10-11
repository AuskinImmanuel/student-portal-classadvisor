import React, { useState, useEffect } from "react";

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

function Upload() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column" pt={{ base: "1rem", md: ".5rem" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
        <Card>
          <Button
            onClick={onToggle}
            colorScheme="orange"
            variant="solid"
            width="100%"
          >
            Download
          </Button>
        </Card>
        <Card>
          <Button
            onClick={onToggle}
            colorScheme="orange"
            variant="solid"
            width="100%"
          >
            Upload
          </Button>
        </Card>
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
          <Input width="50%" type="file" />
          <Button ms="4" marginTop="2" bg="gray.700" width="fit-content">
            Upload
          </Button>
        </Card>
      </Collapse>
    </Flex>
  );
}

export default Upload;
