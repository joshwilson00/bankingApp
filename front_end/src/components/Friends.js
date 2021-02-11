import React, { useEffect, useState } from "react";
import FriendBox from "./FriendBox";
import { Button, Container } from "@chakra-ui/react";

function Friends(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        setFriends([{ email: "test@test.com" }, { email: "ihwlaen, fwlkddabwoibo@test.com" }])
    }, [])
    return (
        <Container>
            <Button colorScheme="teal" variant="solid" onClick={props.onToggle} pos="right">
                Invite
            </Button>
            {friends.map((friend) => (
                <FriendBox friend={friend}/>
            ))}
        </Container>
    )
}

export default Friends;