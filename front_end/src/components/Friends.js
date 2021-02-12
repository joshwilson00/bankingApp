import React, { useEffect, useState } from "react";
import SendBanner from "./SendBanner";
import FriendBox from "./FriendBox";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Text, useDisclosure } from "@chakra-ui/react";

function Friends({ onToggle, friends, update }) {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [loadedFriends, setLoadedFriends] = useState([]);
    const [toUser, setToUser] = useState("");
    const [loaded, setLoaded] = useState(false);
    const slideUp = useDisclosure();

    useEffect(() => {
        if (friends) {
            console.log(friends)
            async function getFriends() {
                await setLoadedFriends([]);
                if (isAuthenticated) {
                    try {
                        friends.forEach(async (element) => {
                            let newFriends = loadedFriends.slice(0);
                            const t = await getAccessTokenSilently();
                        
                            const response = await fetch(
                                `${process.env.REACT_APP_SERVER}/getFriend?fId=${element}`,
                                {
                                method: 'GET',
                                headers: {
                                    Authorization: `Bearer ${t}`
                                }
                            }
                            );
                            const responseData = await response.json();
                            console.log(responseData.email)
                            newFriends.push(responseData.email)
                            console.log(newFriends)
                            await setLoadedFriends(newFriends)
                        });
                        setLoaded(true)
                    } catch (error) {
                        console.error(error)
                    }
                }
            }
            getFriends();
        }
    }, [friends, getAccessTokenSilently, isAuthenticated]);

    const bringSendBox = (to) => {
        slideUp.onToggle();
        setToUser(to);
    }

    if (!loaded) {
        return (
            <Container>
                <Text fontSize="md">Loading..</Text>
            </Container>
        )
    }
    return (
        <Container>
            <Button colorScheme="teal" variant="solid" onClick={onToggle} pos="right">
                Invite
            </Button>
            {loadedFriends.map((e) => (
                <FriendBox friend={e} key={e} toggleBox={bringSendBox}/>
            ))}
            <SendBanner to={toUser} open={slideUp.isOpen} toggleBox={bringSendBox} update={update}/>
        </Container>
    )
    
}

export default Friends;