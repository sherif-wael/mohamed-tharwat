import {css} from "styled-components";

const mixins = {};


mixins.flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

mixins.flexColumn = css`
    display: flex;
    flex-direction: column;
`

mixins.flexColumnCenter = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

mixins.after = css`
    position: absolute;
    content: "";
    width: 100%;
`

mixins.sidePaddings = css`
    padding-left: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
    padding-right: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
`

mixins.smallSidePaddings = css`
    padding-left: calc(1rem + (8 - 6) * ((100vw - 20rem) / (100 - 20)));
    padding-right: calc(1rem + (8 - 6) * ((100vw - 20rem) / (100 - 20)));
`

mixins.img = css`
    max-width: 100%;
    display: block;
    overflow: hidden;
    height: auto;
`

mixins.flexBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

mixins.topPaddings = css`
    padding-top: 40px;
    padding-bottom: 120px;
`

mixins.containerAbsolute = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`



export default mixins ;