import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 144px auto;
    grid-template-areas:
    "header"
    "content"
    ;

    > header {
        grid-area: header;
        background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
        display: flex;
        align-items: center;
        padding: 0 125px;

        svg {
            color: ${({theme})=>theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }

    > main {
        grid-area: content;
        background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    }
`


export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    >div:nth-child(4) {
        margin-top: 24px;
    }

`;

export const Avatar = styled.div`
    position: relative;

    margin: -125px auto 32px;
    width: 186px;
    height: 186px;
    
    >img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    >label {
        width: 45px;
        height: 45;
        background-color: ${({theme})=> theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        padding: 10px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;

            color: ${({theme})=> theme.COLORS.BACKGROUND_700};
        }
    }

`