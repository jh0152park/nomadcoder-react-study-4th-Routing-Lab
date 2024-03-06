import { useParams } from "react-router-dom";
import { BOOKS } from "../global/data";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
} from "@chakra-ui/react";

interface IOption {
    option: string;
}

export default function DetailOption({ option }: IOption) {
    const { book } = useParams();
    const bookData = BOOKS.find((_book) => _book.name === book);
    const data =
        option === "Chapters" ? bookData?.chapters : bookData?.characters;

    return (
        <Accordion allowToggle w="100%" h="580px" overflowY="scroll">
            <AccordionItem>
                <h2>
                    <AccordionButton
                        _expanded={{ bg: "#00B5D8", color: "white" }}
                    >
                        <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="bold"
                        >
                            {option} of {book}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {data?.map((text, i) => (
                        <Text key={text} my="10px">
                            {i + 1}. {text}
                        </Text>
                    ))}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
