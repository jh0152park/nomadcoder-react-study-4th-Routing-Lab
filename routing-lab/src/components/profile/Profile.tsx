import { Heading, Image, VStack } from "@chakra-ui/react";
import Album from "../album/Album";
import { useNavigate } from "react-router-dom";

interface IProfileProps {
    name: string;
    logoImage: string;
    profileImage: string;
}

export default function Profile({
    name,
    logoImage,
    profileImage,
}: IProfileProps) {
    const navigate = useNavigate();

    return (
        <VStack
            onClick={() => {
                navigate(`/${name}`);
            }}
        >
            <Album width={440} height={620} image={profileImage} />
            <Image
                _hover={{ cursor: "pointer" }}
                src={logoImage}
                objectFit="cover"
                w="200px"
                mt="20px"
            />
            <Heading _hover={{ cursor: "pointer" }}>{name}</Heading>
        </VStack>
    );
}
