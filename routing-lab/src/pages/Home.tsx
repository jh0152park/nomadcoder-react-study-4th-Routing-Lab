import { HStack } from "@chakra-ui/react";
import Album from "../components/album/Album";
import { AUTHORS } from "../global/data";
import Profile from "../components/profile/Profile";

export default function Home() {
    const authors = AUTHORS;
    const logos = [
        "/resources/images/logo/HarryPoter_Logo.png",
        "/resources/images/logo/LoadOfRing.png",
    ];

    return (
        <HStack w="100%" justifyContent="center" mt="50px" spacing="50px">
            {authors.map((author, index) => (
                <Profile
                    key={author.name}
                    name={author.name}
                    logoImage={logos[index]}
                    profileImage={author.profileImage}
                />
            ))}
        </HStack>
    );
}
