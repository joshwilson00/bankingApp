import { Button, Box, Badge, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function FriendBox(props) {
    const [friend, setFriend] = useState({})

    useEffect(() => {
        setFriend(props.friend)
    }, [props.friend])
  
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" marginTop="3">  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Friend
            </Badge>
            <Box marginLeft="2">
              <Text>{friend.toString()}</Text>
            <Button marginLeft="2" size="sm" onClick={() => props.toggleBox(friend.toString())}>Send Money</Button>
            </Box>
          </Box>        
        </Box>
      </Box>
    )
  }