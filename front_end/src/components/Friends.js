import React, { useEffect, useState } from "react";
import FriendBox from "./FriendBox";
import { Button } from "@chakra-ui/react";

function Friends(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        setFriends([{ email: "test@test.com" }, { email: "ihwlaen, fwlkddabwoibo@test.com" }])
    }, [])
    return (
        <div>
            <Button colorScheme="teal" variant="solid" onClick={props.onToggle}>
                Invite
            </Button>
            {friends.map((friend) => (
                <FriendBox friend={friend}/>
            ))}
        </div>
    )
}

export default Friends;