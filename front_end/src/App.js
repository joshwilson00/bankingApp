import UserProfile from './components/UserProfile';
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text, Grid, GridItem, Heading, useDisclosure, Container } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionsTable from './components/Transactions';
import Friends from './components/Friends';
import InviteBanner from './components/InviteBanner';


function App() {
  const { isAuthenticated } = useAuth0();
  const slideUp = useDisclosure();

    return (
      <Box>
      <Navbar />
      {isAuthenticated ?
        <>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem>
              <UserProfile />
            </GridItem>
            <GridItem>
              <Heading size="xl">Recent Transactions</Heading>
              <TransactionsTable />
            </GridItem>
            <GridItem>
              <Heading size="xl">Your Friends</Heading>
              <Friends onToggle={slideUp.onToggle} />
            </GridItem>
          </Grid>
          <InviteBanner open={slideUp.isOpen} />
        </>
        : 
        <Box >
          <Grid gap={6} templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Container>
                <Text
                  bgGradient="linear(to-l, purple.500,purple.800)"
                  bgClip="text"
                  fontSize="6xl"
                  fontWeight="extrabold"
                >
                  Welcome to a Super Secure Bank
                </Text>
                <Box>
                  <Text fontSize="x-large">A 2018 report showed that the vast majority of bankers have no close friends.</Text>
                  <Text fontSize="xl">Apparently they're all loaners</Text>
                  <Text marginTop="16" fontSize="large">If that won't convince you to sign up, I don't know what will.</Text>
                </Box>
              </Container>
            </GridItem>
            <GridItem>
            <Container>
                <Text
                  bgGradient="linear(to-l, purple.500,purple.800)"
                  bgClip="text"
                  fontSize="6xl"
                  fontWeight="extrabold"
                >
                  Give a man a gun and he’ll rob a bank, Give a man a bank and he’ll rob the world.
                </Text>
                <Box>
                  <Text fontSize="3xl">And that's what we've done from day one</Text>
                  <Text fontSize="xl">"If money talks, why do we need bank tellers?" - Our Founder</Text>
                </Box>
              </Container>
            </GridItem>
          </Grid>
        </Box>
        }
      </Box>
    );
}

export default App;
