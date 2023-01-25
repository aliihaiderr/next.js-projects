"use client";
import { Flex, Heading, Input, Button, useColorMode,useColorModeValue } from "@chakra-ui/react";


export default function Home() {
  const {toggleColorMode} = useColorMode();
  const formBackground = useColorModeValue("gray.100","gray.700")
  return (
   <Flex height={"100vh"} alignItems="center" justifyContent={"center"} >
      <Flex direction={"column"} background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>LogIn</Heading>
          <Input placeholder="example@mail.com" variant={"filled"} mb={3} type={"email"}></Input>
          <Input placeholder="*******" variant={"filled"} mb={6} type={"password"}></Input>
          <Button colorScheme={"teal"}>LogIn</Button>
          <Button onClick={toggleColorMode} mt={6}>Toggle Color Mode</Button>
      </Flex>
   </Flex>
  )
}
