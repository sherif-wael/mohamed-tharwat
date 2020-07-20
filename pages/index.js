import styled from 'styled-components'
import Layout from "../components/layout";
import Intro from "../components/intro";
import Activities from "../components/activities";
import Info from "../components/info";
import Conference from "../components/confrence";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Info />
      <Conference />
      <Activities />
    </Layout>
  )
}
