import React from "react";
import { Slide, Box, Text, Button, Input } from "@chakra-ui/react";
function InviteBanner(props) {
    return (
        <Slide direction="bottom" in={props.open} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
            <Box>
                <Text>Invite a friend today! When you invite someone to join, you get £5 for free!
                <Input placeholder="email@email.com" maxWidth="md" marginLeft="3" bgColor="white" />
                <Button marginLeft="2" bgGradient="linear(to-r, red.500,orange.500)" _hover={{ bgGradient: "linear(to-r, red.500,orange.500)" }}>Invite!</Button>
                </Text>
            </Box>
        </Box>
      </Slide>
    )
}

export default InviteBanner