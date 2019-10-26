import styled, { keyframes } from 'styled-components'

const slideFromBottom = keyframes`
    from { 
        opacity: 0; 
        transform: translate(0, 100px);
    }
    to { 
        color: 1; 
        transform: translate(0, 0);
    }
`

const slideFromRight = keyframes`
    from { 
        opacity: 0; 
        transform: translate(100px, 0);
    }
    to { 
        color: 1; 
        transform: translate(0, 0);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding-bottom: 50px;

    ul {
        padding: 0 15%;
        list-style-type: none;
        width: 100%;

        li {
            background: rgba(0, 0, 0, 0.1);
            padding: 20px 26px;
            border-radius: 4px;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            transition: background 0.4s linear;
            animation: ${slideFromBottom} 0.5s;

            &:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.2);
            }

            strong {
                flex: 87;
            }

            span {
                color: #c2c2c2;
                flex: 24;
            }

            div {
                flex: 3;
                padding-left: 30px;
                align-items: center;
                display: flex;
            }
        }
    }
`

export const TitleContainer = styled.div`
    padding: 50px 15% 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        min-height: 40px;
        padding: 8px 20px;
        font-weight: 500;
        font-size: 15px;
        display: flex;
        align-items: center;
        animation: ${slideFromRight} 0.5s;

        @media (max-width: 600px) {
            width: 100%;
            max-width: 120px;
        }

        svg {
            margin-right: 8px;
        }
    }
`

export const PaginationContainer = styled.div`
    padding: 50px 15% 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    max-width: 70px;

    span {
        padding: 0 13px 0 8px;
        font-weight: bold;
    }

    button {
        background: rgba(255, 255, 255, 0.05);
        margin-right: 6px;
        height: 40px !important;
        padding: 10px !important;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        svg {
            margin-top: 1px;
        }
    }
`