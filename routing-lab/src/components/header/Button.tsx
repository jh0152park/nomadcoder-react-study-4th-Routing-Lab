import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IButtonProps {
    name: string;
    path?: string;
}

export default function Button({ name, path }: IButtonProps) {
    const navigate = useNavigate();

    return (
        <Heading
            _hover={{
                transform: ["scale(1.1)"],
                cursor: "pointer",
                color: "#00B5D8",
            }}
            transition="all 0.1s linear"
            onClick={() => {
                navigate(
                    path
                        ? `/${path}`
                        : name === "Home"
                        ? "/"
                        : `/${name.toLowerCase()}`
                );
            }}
        >
            {name}
        </Heading>
    );
}
