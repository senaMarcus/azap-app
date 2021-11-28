import styled from "styled-components"
import {MdClose} from "react-icons/md"

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled.div`
  width: 90vh;
  height: 70vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  background-color: #000;
  color: #141414;
`
export const CloseModalButton = styled(MdClose)`
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
export const HeroDetails = styled.p`
  border: 3px solid #ff5b00;
  border-radius: 10%;
  background-color: #fff;

  p {
    margin: 20px 20px;
  }
`
