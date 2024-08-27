import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: #e35824;
    color: white;

    &:hover {
        background: #be3a08;
    }
`;

const ImagePreview = styled.img`
    max-width: 100%;
    max-height: 200px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export { ModalOverlay, ModalContent, Input, Button, ImagePreview };
