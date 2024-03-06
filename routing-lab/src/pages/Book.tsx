import { HStack, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BOOKS, LOGOS, NUMOFAUTHOR } from "../global/data";
import Product from "../components/product/Product";
import Button from "../components/header/Button";

interface IBookProps {
    children?: React.ReactNode;
}

export default function Book({ children }: IBookProps) {
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
            <VStack w="440px" h="740px" align="flex-start">
                <HStack w="100%" justifyContent="center" spacing="30px">
                    <Button
                        name="Chapters"
                        path={`author/${bookData!.author}/${
                            bookData!.name
                        }/chapters`}
                    />
                    <Button
                        name="Characters"
                        path={`author/${bookData!.author}/${
                            bookData!.name
                        }/characters`}
                    />
                </HStack>
                {children}
            </VStack>
        </HStack>
    );
}
