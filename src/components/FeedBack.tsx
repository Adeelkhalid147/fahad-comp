"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Heading,
  Textarea,
  Center,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export function FeedBack() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that ll receive focus on close.
      </Box>

      <Button mt={4} onClick={onOpen}>
        Feedback
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1200px" sx={{ maxHeight: "800px" }} rounded="md">
          <ModalHeader
            pb={20}
            // h={"50px"}
            textAlign="center"
            bg="linear-gradient(0deg,#6f7891,#1f3b4b)"
            color="white"
            fontSize="md"
          >
            How May We Help?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              bg={"white"}
              position="relative"
              marginTop="-50px"
              rounded="md"
              boxShadow="lg"
              height={"300px"}
              border={{ width: 1, style: "solid", color: "red" }}
            >
              <Box h="200px" w="100%" p={4}>
                <Textarea
                  p={3}
                  height={"250px"}
                  width="100%"
                  rounded="lg"
                  // value={value}
                  // onChange={handleInputChange}
                  placeholder="Any thing you would like to add..."
                  size="sm"
                  focusBorderColor="black.500"
                  // border="solid blue"
                  borderWidth="thin"
                />
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Center w="100%" justifyContent="center">
              <Button
                bg="#ED512E"
                color="white"
                _hover={{ bg: "#FF6347" }}
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
