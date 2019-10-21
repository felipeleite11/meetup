import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 60px;
    background: rgba(0, 0, 0, 0.3);
    padding: 15px 15%;

    img {
        width: 31px;
        height: 32px;
    }
`

export const UserContainer = styled.div`
    display: flex;
    
    div {
        display: flex;
        flex-direction: column;
        padding: 0 20px;

        strong {
            font-size: 14px;
            font-weight: bold;
        }

        a {
            text-decoration: none;
            color: #c2c2c2;
            transition: color 0.3s linear;

            &:hover {
                color: #a2a2a2;
            }
        }

        span {
            font-size: 12px;
            margin-top: 4px;
            float: right;
        }
    }

    button {
        font-size: 15px;
        font-weight: 500;
        padding: 7px 10px;
    }
`