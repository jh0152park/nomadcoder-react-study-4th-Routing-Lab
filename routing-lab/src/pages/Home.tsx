import { HStack } from "@chakra-ui/react";
import { AUTHORS, LOGOS } from "../global/data";
import Profile from "../components/product/Product";

export default function Home() {
    const authors = AUTHORS;

    return (
        <HStack w="100%" justifyContent="center" mt="50px" spacing="50px">
            {authors.map((author, index) => (
                <Profile
                    key={author.name}
                    name={author.name}
                    logoImage={LOGOS[index]}
                    profileImage={author.profileImage}
                    nextPath={`author/${author.name}`}
                />
            ))}
        </HStack>
    );
}