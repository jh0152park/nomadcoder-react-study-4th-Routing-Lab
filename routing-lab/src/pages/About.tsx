import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <Box w="100%" pl="30px" pt="100px">
            <Heading mb="20px">All about this page</Heading>
            <Text fontSize="18px">
                This is a website to discover great books adn authors
            </Text>
        </Box>
    );
}
