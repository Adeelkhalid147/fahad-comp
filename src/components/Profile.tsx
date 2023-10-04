"use client";
import React from "react";
import {
  Box,
  useDisclosure,
  Button,
  Text,
  Flex,
  Input,
  VStack,
  Heading,
  Stack,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import {MdClose} from "react-icons/md"

export function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Edit Profile</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1200px" sx={{ maxHeight: "800px" }} >
        <MdClose/>
        <ModalBody margin="0px" padding="0px" borderRadius="10px 10px 0 0">
          <Box >
            <Box
              position="relative"
              zIndex="0"
              bg="linear-gradient(0deg,#6f7891,#1f3b4b)"
              borderRadius="10px 10px 0 0"
              height="225px"

            >
              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text fontSize="sm" color="white" fontWeight="bold" pt="4">
                  Edit Profile
                </Text>
                {/* image Box */}
                <Box pt="8">
                <Image
                  src={"https://packr.s3.amazonaws.com/user.png"}
                  alt="profileimage"
                  height={55}
                  width={55}
                />
                </Box>
                <Text fontSize="sm" color="white" fontWeight="bold" pt="2">
                  Adeel
                </Text>
              </Flex>
            </Box>
            <Flex alignItems="center" justifyContent="center">
              <Box
                m={3}
                p={3}
                height="200px"
                width="1150px"
                rounded="lg"
                position="relative"
                zIndex="1"
                marginTop="-50px"
              >
                <Stack spacing={4} align="start" rounded="lg">
                  {/* box username and phone */}
                  <Box
                 
                  marginBottom="1rem"
                    boxShadow="xl"
                    bg="white"
                    w="full"
                    height="100px"
                    rounded="md"
                    
                  >
                   
                    <Input
                      type="text"
                      h="50px"
                      size="sm"
                      w="full"
                      placeholder="Name"
                      border="none"
                      _focus={{ border: "none" }}
                    />
                    <Divider
                      maxW="1100px" 
                      my="5px" 
                      mx="auto" 
                      borderWidth="1px" 
                      borderColor="gray" 
                    />
                    
                    <Input
                      type="tel"
                      h="50px"
                      size="sm"
                      w="full"
                      placeholder="Phone Number"
                      border="none"
                      _focus={{ border: "none" }}
                    />
                  </Box>
                </Stack>


                
                {/* box password */}
                <Box
                
                  rounded="lg"
                  boxShadow="2xl"
                  w="full"
                  h="60px"
                  
                  padding="10px"
                  marginTop="1rem"
                >
                  <Flex justify="between">
                    <Box w="95%">
                      <Input
                        type="password"
                        placeholder="New Password"
                        size="sm"
                        w="full"
                        border="none"
                        _focus={{ border: "none" }}
                      />
                    </Box>
                    <Box display="flex" alignItems="center">
                      <IconButton
                        aria-label="Show password"
                        icon={<IoIosArrowForward size="15px" />}
                        size="sm"
                        variant="ghost"
                      />
                    </Box>
                  </Flex>
                </Box>
                
              </Box>
            </Flex>
          </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
