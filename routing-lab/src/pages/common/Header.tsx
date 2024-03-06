import { HStack } from "@chakra-ui/react";
import Button from "../../components/header/Button";

export default function Header() {
    return (
        <HStack
            pt="40px"
            w="100%"
            h="100px"
            justifyContent="center"
            spacing="50px"
        >
            <Button name="Home" />
            <Button name="About" />
        </HStack>
    );
}
