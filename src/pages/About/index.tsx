import InfoAbout from '../../data/infoAbout'
import Collapse from '../../components/Collapse'
import image from '../../assets/aboutIllustration.png'
import { useEffect } from 'react'
import { AboutWrapper, ImgWrapper, AllCollapseWrapper } from './style'

function About() {
  useEffect(() => {
    document.title = 'Kasa - À Propos'
  }, [])

  return (
    <AboutWrapper>
      <ImgWrapper>
        <img src={image} alt="photo d'un paysage" />
      </ImgWrapper>

      <AllCollapseWrapper>
        {InfoAbout.map((element, index) => (
          <Collapse
            key={`about-${element.name}-${index}`}
            title={element.name}
            body={element.description}
          />
        ))}
      </AllCollapseWrapper>
    </AboutWrapper>
  )
}

export default About
