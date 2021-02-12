import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Text, Heading, Box, PinInput, PinInputField, HStack, Button } from "@chakra-ui/react";

const UserProfile = ({ bankUser }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log('User',bankUser)
  return (
    isAuthenticated && (
      <Container>
        <Heading size="xl">Your Profile</Heading>
        <Text fontSize="2xl">Welcome, {user.name}</Text>
        <Text fontSize="1xl">Your Balance: {bankUser.balance}</Text>
        <Box marginTop="5">
          <Heading size="2md">Referral Code</Heading>
          <Text fontSize="md">Were you referred by another user? Enter the referral code found in your email, to get both you and your friend, £5!</Text>
          <HStack marginTop="3">
            <PinInput type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
            <Button colorScheme="teal" variant="solid">Submit</Button>
        </HStack>
        </Box>
      </Container>
    )
  );
};

export default UserProfile;