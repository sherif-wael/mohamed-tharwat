import Layout from "../components/layout";
import styled from "styled-components";
import Map from "../components/map";
import Schedule from  "../components/schedule";
import Register from "../components/register";


const StyledMapWrapper = styled.div`
    height: 400px;
    position: relative;
`

export default function Clinic(){
    return (
        <Layout>
            <StyledMapWrapper>
                <Map />
            </StyledMapWrapper>
            <Schedule />
            <Register />
        </Layout>
    )
}