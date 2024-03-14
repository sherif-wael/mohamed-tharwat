import Layout from "../components/layout";
import styled from "styled-components";
import Map from "../components/map";
import Schedule from "../components/schedule";
import Register from "../components/register";
import Carousel from "../components/clinic-carousel";

const StyledMapWrapper = styled.div`
  height: 400px;
  position: relative;
`;

export default function Clinic() {
  return (
    <Layout>
      <Carousel />
      {/* <StyledMapWrapper>
                <Map />
            </StyledMapWrapper> */}
      <Schedule />
      <Register />
    </Layout>
  );
}
