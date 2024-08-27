import styled from 'styled-components';
import Image from "next/image";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    text-align: center;
    background-color: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
`;

export const StyledImage = styled(Image)`
    border-radius: 10px;
    width: 100%;
    object-fit: contain;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    margin: 10px 0;
    color: #333;
    min-height: 60px;
`;

export const Price = styled.h2`
    font-size: 1.25rem;
    margin: 5px 0;
    color: #e35824;
`;

export const Year = styled.h2`
    font-size: 1.125rem;
    margin: 5px 0;
    color: #666;
`;
