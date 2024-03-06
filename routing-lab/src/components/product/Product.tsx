import { Text, Image, VStack } from "@chakra-ui/react";
import Album from "../album/Album";
import { useNavigate } from "react-router-dom";

interface IProfileProps {
    name: string;
    logoImage: string;
    profileImage: string;
    nextPath: string;
    fontSize: number;
}

export default function Product({
    name,
    logoImage,
    profileImage,
    nextPath,
    fontSize,
}: IProfileProps) {
    const navigate = useNavigate();

    return (
        <VStack
            onClick={() => {
                navigate(`/${nextPath}`);
            }}
        >
            <Album width={440} height={620} image={profileImage} />
            <Image
                _hover={{ cursor: "pointer" }}
                src={logoImage}
                w="200px"
                h="50px"
                mt="20px"
            />
            <Text
                fontWeight="bold"
                fontSize={fontSize}
                _hover={{ cursor: "pointer" }}
            >
                {name}
            </Text>
        </VStack>
    );
}
