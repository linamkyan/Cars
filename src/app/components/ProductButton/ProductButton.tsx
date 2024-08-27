'use client'

import { useRouter } from "next/navigation";
import {StyledButton} from "./ProductButton.styles";

interface ProductButtonProps {
    id: string | number;
}

export default function ProductButton({ id }: ProductButtonProps) {
    const router = useRouter();

    function handleClick() {
        router.push(`/products/${id}`);
    }

    return (
        <StyledButton onClick={handleClick}>
            Посмотреть детали
        </StyledButton>
    );
}
