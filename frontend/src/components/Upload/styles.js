import styled from 'styled-components'

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
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            width: 100%;
            max-height: 240px;
            border: solid 3px rgba(255, 255, 255, 0.3);
            background: #eee;
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
