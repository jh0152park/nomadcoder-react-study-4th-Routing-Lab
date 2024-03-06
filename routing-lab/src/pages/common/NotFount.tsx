import { Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <Center w="100%" h="100vh">
            <VStack>
                <Heading>404 Page Not Found</Heading>
                <Heading
                    _hover={{
                        transform: ["scale(1.1)"],
                        cursor: "pointer",
                        color: "#00B5D8",
                    }}
                    transition="all 0.1s linear"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Click to Home
                </Heading>
            </VStack>
        </Center>
    );
}
