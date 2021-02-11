import React from "react";
import { Slide, Box, Text } from "@chakra-ui/react";
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
          <Text>Invite a friend today! When you invite someone to join, you get £5 for free!</Text>
        </Box>
      </Slide>
    )
}

export default InviteBanner