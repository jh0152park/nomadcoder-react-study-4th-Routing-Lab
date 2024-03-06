import { Box, Heading, Highlight } from "@chakra-ui/react";

export default function About() {
    return (
        <Box w="100%" pl="30px" pt="100px">
            <Heading mb="20px">All about this page</Heading>
            <Heading lineHeight="tall">
                <Highlight
                    query={["great books", "authors"]}
                    styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "teal.100",
                    }}
                >
                    This is a website to discover great books and authors
                </Highlight>
            </Heading>
        </Box>
    );
}
