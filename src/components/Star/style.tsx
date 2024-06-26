import styled from "styled-components"

export const Stars = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  & img {
    @media (max-width: 768px) {
      height: 13px;
    }
  }
`