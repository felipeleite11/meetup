import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100vh;

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

            &:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.2);
            }

            span {
                color: #c2c2c2;
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
        height: 40px;
        padding: 0 20px;
        font-weight: 500;
        font-size: 15px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 8px;
        }
    }
`