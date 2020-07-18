import Layout from "../components/layout";
import styled from "styled-components";
import Map from "../components/map";
import Schedule from  "../components/schedule";
import Register from "../components/register";
import Slider from "../components/slider";
import {useMediaQuery} from "react-responsive";

const StyledMapWrapper = styled.div`
    height: 400px;
    position: relative;
`

const imgs = [
    "/images/clinic1.jpeg",
    "/images/clinic2.jpeg",
    "/images/clinic3.jpeg",
    "/images/clinic4.jpeg"
]

export default function Clinic(){
    let isMobile = useMediaQuery({query: "(max-width: 600px)"});
    return (
        <Layout>
            <Slider height={isMobile ? "400px" : "500px"} imgs={imgs} />
            {/* <StyledMapWrapper>
                <Map />
            </StyledMapWrapper> */}
            <Schedule />
            <Register />
        </Layout>
    )
}