import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100vh;

    input, button {
        margin: 10px 0;
        width: 100%;
        max-width: 315px;
    }

    img {
        width: 41px;
        height: 43.24px;
        margin-bottom: 50px;
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        margin-top: 10px;
    }

    button[disabled] {
        opacity: 0.3;
        cursor: auto;
    }
`