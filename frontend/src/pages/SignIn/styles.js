import styled from 'styled-components'
import { Form } from '@rocketseat/unform'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    input, button {
        margin: 10px 0;
        width: 100% !important;
    }

    img {
        width: 41px;
        height: 43.24px;
        margin-bottom: 50px;
    }

    button.transparent {
        font-weight: bold;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        background: transparent;
    }
`