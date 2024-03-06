import { HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BOOKS, LOGOS, NUMOFAUTHOR } from "../global/data";
import Product from "../components/product/Product";

export default function Book() {
    const { book } = useParams();
    const bookData = BOOKS.find((_book) => _book.name === book);

    return (
        <HStack w="100%" justifyContent="center">
            <Product
                name={bookData!.name}
                logoImage={LOGOS[NUMOFAUTHOR[bookData!.author]]}
                profileImage={bookData!.image}
                fontSize={20}
                nextPath={`author/${bookData!.author}/${bookData!.name}`}
            />
        </HStack>
    );
}
