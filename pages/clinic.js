import Layout from "../components/layout";
import styled from "styled-components";
import Map from "../components/map";
import Schedule from  "../components/schedule";
import Register from "../components/register";
import Slider from "../components/slider";

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
    return (
        <Layout>
            <Slider imgs={imgs} />
            {/* <StyledMapWrapper>
                <Map />
            </StyledMapWrapper> */}
            <Schedule />
            <Register />
        </Layout>
    )
}