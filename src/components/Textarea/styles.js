import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-top: 8px;
    border-radius: 10px;
    padding: 0 12px 12px 12px;

    &::placeholder {
        color: ${({theme})=> theme.COLORS.GRAY_300};
        padding: 12px;
    }
`