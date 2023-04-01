import styled from "styled-components";

export const InputBox = styled.div`
    display: flex;
    align-items: center;
`;

export const InputBar = styled.input`
    height: 30px;
    width: 350px;
    padding: 5px;
    border: 2px solid ${({theme}) => theme.card};
    border-radius: 10px;
    font-size: 1.3rem;
    text-shadow: 2px 1px #e1e1e1;
`;