import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #e35824;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #be3a08;
    }

    &:focus {
        outline: none;
    }

    &:active {
        background-color: #be3a08;
    }
`;
