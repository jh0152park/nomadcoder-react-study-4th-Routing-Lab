import { Center } from "@chakra-ui/react";
import Album from "../components/album/Album";

export default function Home() {
    return (
        <Center w="100%">
            <Album
                width={440}
                height={620}
                image="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
            />
        </Center>
    );
}
