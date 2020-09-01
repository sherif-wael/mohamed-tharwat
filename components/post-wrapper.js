import StyledPost from "../styles/post-styles";
import React, {useEffect} from "react";

export default function PostWrapper({children}){
    useEffect(() => {
        document.addEventListener("contextmenu", e => {
            e.preventDefault();
        })
    }, [])
    return (
        <StyledPost>
            {children}
        </StyledPost>
    )
}