import UserProfile from './components/UserProfile';
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react"
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
        : null }
      </Box>
    );
}

export default App;
