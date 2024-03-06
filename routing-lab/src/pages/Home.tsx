import { HStack } from "@chakra-ui/react";
import { AUTHORS, LOGOS } from "../global/data";
import Product from "../components/product/Product";

export default function Home() {
    const authors = AUTHORS;

    return (
        <HStack w="100%" justifyContent="center" spacing="50px">
            {authors.map((author, index) => (
                <Product
                    key={author.name}
                    name={author.name}
                    logoImage={LOGOS[index]}
                    fontSize={40}
                    profileImage={author.profileImage}
                    nextPath={`author/${author.name}`}
                />
            ))}
        </HStack>
    );
}
