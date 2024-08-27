import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ByttonsSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
`;

export const FilterSection = styled.div`
    h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    background-color: #e35824;
    color: white;
    border: none;
    padding: 0 20px;
    font-size: 1em;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 5px;
    height: 38px;

    &:hover {
        background-color: #be3a08;
    }
`;

export const ErrorText = styled.p`
    color: red;
    margin-top: 10px;
`;

export const AuthButtons = styled.div`
    margin-top: 20px;
`;

export const AuthStatus = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    h2 {
        font-size: 1.5em;
        margin-right: 20px;
    }
`;

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;
