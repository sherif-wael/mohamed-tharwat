import {css} from "styled-components";


const transitions = css`
    .fadeup-enter, .fadeup-appear{
        opacity: 0;
        transform: translateY(20px);
    }
    .fadeup-enter-active, .fadeup-appear-active, .fadeup-appear-done{
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 500ms linear,
                    transform 500ms linear;
    }
    .fadeup-exit{
            opacity: 1;
            transform: translateY(0px);
            transition: opacity 500ms linear,
                        transform 500ms linear;
        }
    .fadeup-exit-active{
        opacity: 0;
        transform: translateY(20px)
    }
`

export default transitions;