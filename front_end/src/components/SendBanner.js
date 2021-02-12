import React, { useState } from "react";
import { Slide, Box, Text, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

function SendBanner(props) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [amt, setAmt] = useState(0);
  const [sending, setSending] = useState(false);
  const handleChange = (value) => setAmt(value.target.value)


  const sendCash = async () => {
    setSending(true)
    const t = await getAccessTokenSilently();
    const response = await fetch(
      `/send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${t}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email, sendTo: props.to, amount: amt })
      }
    );
    if (await response.status === 200) {
      setSending(false);
      props.toggleBox("")
      props.update();
    }
  }
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
                <Text>You are sending to: {props.to}
                <NumberInput>
                  <NumberInputField onChange={handleChange} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Button isLoading={sending} loadingText="Woosh!" onClick={sendCash} marginLeft="2" bgGradient="linear(to-r, red.500,orange.500)" _hover={{ bgGradient: "linear(to-r, red.500,orange.500)" }}>Send!</Button>
                </Text>
            </Box>
        </Box>
      </Slide>
    )
}

export default SendBanner