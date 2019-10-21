import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: calc(100vh - 60px);
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

export const Content = styled.div`
    padding: 0 15%;

    img {
        width: 100%;
        height: 240px;
    }

    p {
        margin: 22px 0;
        line-height: 30px;
    }

    span {
        color: #b2b2b2;
        font-size: 12px;
        margin: 22px 26px 22px 0;

        svg {
            margin-right: 8px;
        }
    }
`

export const ActionContainer = styled.div`
    display: flex;
    
    button {
        margin-left: 20px;
    }

    button:first-child {
        background: #4DBAF9;
    }
`