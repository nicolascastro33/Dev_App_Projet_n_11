import styled from 'styled-components'


export const AboutWrapper = styled.main`
  margin: 0px 100px 30px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;

  @media (max-width: 768px) {
    margin: 0px 20px 20px 20px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  min-width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 223px;
  margin-bottom: 50px;
  @media(max-width:768px) {
    height: 111px;
    margin-bottom: 20px;
  }
  & img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const AllCollapseWrapper = styled.div`
  width: 75%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`