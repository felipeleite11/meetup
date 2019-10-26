import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: -webkit-linear-gradient(0deg, rgba(37,33,46,1) 0%, rgba(53,37,59,1) 100%);
        background:    -moz-linear-gradient(0deg, rgba(37,33,46,1) 0%, rgba(53,37,59,1) 100%);
        background:     -ms-linear-gradient(0deg, rgba(37,33,46,1) 0%, rgba(53,37,59,1) 100%);
        background:      -o-linear-gradient(0deg, rgba(37,33,46,1) 0%, rgba(53,37,59,1) 100%);
        background:         linear-gradient(0deg, rgba(37,33,46,1) 0%, rgba(53,37,59,1) 100%);
        background-attachment: fixed;
        -webkit-font-smoothing: antialiased;
        color: #fff;
    }

    body, input, button, textarea {
        font: 14px Helvetica, sans-serif;
    }

    #root {
        width: auto;
        padding: 0;
    }

    input, textarea {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;
        padding: 15px;
        color: #fff;
        font-size: 18px;
    }

    textarea {
        resize: none;
    }

    ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    button {
        cursor: pointer;
        background: #F94D6A;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        padding: 15px;
        border: none;
        border-radius: 4px;
    }

    /* Estilo da mensagem de validação */
    form.validable input + span,
    form.validable textarea + span {
        color: #2c2c2c;
        align-self: flex-end;
        background: #ffeb3b;
        border-radius: 4px;
        padding: 8px;
        font-size: 11px;
    }
`