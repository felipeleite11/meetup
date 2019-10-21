import styled from 'styled-components'
import { Form } from '@rocketseat/unform'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: calc(100vh - 60px);
`

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 0 15%;
    margin-top: 60px;

    textarea, input {
        margin: 10px 0;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        width: 300px;
        margin-left: auto;

        svg {
            margin-right: 8px;
        }
    }
`
