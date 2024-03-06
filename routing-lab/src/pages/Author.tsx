import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function Author() {
    const { name } = useParams();

    return <Text>{name}</Text>;
}
