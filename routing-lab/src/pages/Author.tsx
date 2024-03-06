import { HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AUTHORS, LOGOS, NUMOFAUTHOR } from "../global/data";
import Product from "../components/product/Product";

export default function Author() {
    const { name } = useParams();
    const author = AUTHORS.find((author) => author.name === name);

    return (
        <HStack w="100%" justifyContent="center" mt="50px" spacing="50px">
            {author?.books.map((book) => (
                <Product
                    key={book.name}
                    name={book.name}
                    logoImage={LOGOS[NUMOFAUTHOR[author.name]]}
                    profileImage={book.image}
                    fontSize={20}
                    nextPath={`author/${author.name}/${book.name}`}
                />
            ))}
        </HStack>
    );
}
