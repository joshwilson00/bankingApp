import React from "react"
import { Box, Text } from "@chakra-ui/react"
 
export default function Logo(props) {
  return (
    <Box {...props}>
        <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
        >
        Very Secure Bank
        </Text>
        <Text
        fontSize="1xl"
        fontWeight="extrabold"
        color={"black"}
        >
        (We Promise)
        </Text>
    </Box>
  )
}