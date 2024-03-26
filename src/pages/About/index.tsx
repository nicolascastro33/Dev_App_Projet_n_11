import InfoAbout from '../../data/infoAbout'
import Collapse from '../../components/Collapse'
import styled from 'styled-components'
import image from '../../assets/aboutIllustration.png'
import { useEffect } from 'react'

interface InfoAboutInterface {
  name: string
  description: string
}
const AboutWrapper = styled.main`
  margin: 0px 100px 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media(max-width:768px) {
    margin: 0px 20px 0px 20px;
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 223px;
  margin-bottom: 50px;
  & img {
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const AllCollapseWrapper = styled.div`
  width: 75%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`

function About() {
  useEffect(() => {
    document.title = 'Kasa - À Propos'
  })

  return (
    <>
      <AboutWrapper>
        <ImgWrapper>
          <img src={image} alt="photo d'un paysage" />
        </ImgWrapper>

        <AllCollapseWrapper>
          {InfoAbout.map((element, index) => (
            <Collapse
              key={`about-${element.name}-${index}`}
              title={element.name}
              description={element.description}
            />
          ))}
        </AllCollapseWrapper>
      </AboutWrapper>
    </>
  )
}

export default About
