import { createGlobalStyle, keyframes } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const animations = {
    fadeIn: keyframes`
        from { 
            opacity: 0; 
        }
        to { 
            opacity: 1;
        }
    `,
    expandHeight: keyframes`
        from { 
            transform: scale(1, 0);
        }
        to { 
            transform: scale(1, 1);
        }
    `
}

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


    /* Validation messages customization */
    form.validable input + span,
    form.validable textarea + span {
        color: #2c2c2c;
        align-self: flex-end;
        background: #ffeb3b;
        border-radius: 4px;
        padding: 8px;
        font-size: 11px;
    }


    /* Global animations */
    #root > div:not(.Toastify),
    #root form {
        h1 {
            animation: ${animations.fadeIn} 1s;
        }

        input, textarea, img, div {
            animation: ${animations.expandHeight} 0.2s;
        }
 
        button {
            animation: ${animations.expandHeight} 0.2s;
            width: auto;

            @media (max-width: 600px) {
                width: 100%;
            }
        }
    }
`