import styled from 'styled-components'
import Layout from "../components/layout";
import Intro from "../components/Intro";
import Activities from "../components/activities";
import Info from "../components/Info"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Info />
      <Activities />
      {/* <div style={{height: "1000px"}}></div> */}
    </Layout>
  )
}
