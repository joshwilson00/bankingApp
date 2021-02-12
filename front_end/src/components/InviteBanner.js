import React, { useCallback, useState } from "react";
import {
  Slide,
  Box,
  Text,
  Button,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function InviteBanner(props) {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const fetchInvite = useCallback(async () => {
    if (isAuthenticated) {
      try {
        const t = await getAccessTokenSilently();
        console.log(t);
        console.log(email);
        const response = await fetch(`/invite`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ from: user.email, to: email }),
        });
        console.log(response)
        if(response.status===200) setSuccess(true);
        else setSuccess(false);
      } catch (error) {
        setSuccess(false);
        console.error(error);
      }
    }
  }, [isAuthenticated, user, getAccessTokenSilently, email]);
  return (
    <Slide direction="bottom" in={props.open} style={{ zIndex: 10 }}>
      <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
        <Box>
          {success && (
            <Alert status="success">
              <AlertIcon />
              Email sent!
            </Alert>
          )}
          <Text>
            Invite a friend today! When you invite someone to join, you get £5
            for free!
            <Input
              placeholder="email@email.com"
              maxWidth="md"
              marginLeft="3"
              bgColor="white"
              value={email}
              onInput={handleChange}
              style={{ color: "black" }}
            />
            <Button
              marginLeft="2"
              bgGradient="linear(to-r, red.500,orange.500)"
              _hover={{ bgGradient: "linear(to-r, red.500,orange.500)" }}
              onClick={fetchInvite}
            >
              Invite!
            </Button>
          </Text>
        </Box>
      </Box>
    </Slide>
  );
}

export default InviteBanner;
