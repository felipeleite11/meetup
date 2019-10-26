import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from { 
        opacity: 0; 
        transform: scale(0.5, 0.2);
    }
    to { 
        color: 1; 
        transform: scale(1, 1);
    }
`

export const Container = styled.div`
    align-self: center;
    margin-bottom: 30px;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 3px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            width: 100%;
            max-height: 240px;
            background: #eee;

            animation: ${fadeIn} 0.7s;
        }

        input {
            display: none;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg, span {
            opacity: 0.3;
        }

        span {
            font-size: 16px;
            font-weight: bold;
            margin-top: 8px;
        }
    }
`
