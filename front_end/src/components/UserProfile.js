import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Text, Heading } from "@chakra-ui/react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user)
  return (
    isAuthenticated && (
      <Container>
        <Heading size="xl">Your Profile</Heading>
        <Text fontSize="2xl">Welcome, {user.name}</Text>
        <Text fontSize="1xl">Your Balance: {}</Text>
      </Container>
    )
  );
};

export default UserProfile;