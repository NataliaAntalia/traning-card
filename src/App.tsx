import React from 'react';
import styled from "styled-components";
import {StyledBackground} from "./components/StyledBackground";
import {StyledButton, SuperButton} from "./components/StyledButton";
import {StyledText, Text} from "./components/StyledText";
import imgS from "./images/image.webp"
import {StyledImage} from "./components/StyledImage";

function App() {
  return (
      <StyledBox>

        <StyledBackground>
          <StyledImage src={imgS} alt="photo portfolio card"></StyledImage>
          <Text>Headline</Text>
          <StyledText>Faucibus. Faucibus. Sit sit sapien sit
            tempusrisu ut. Sit molestie ornare in venen.</StyledText>
<div>
          <StyledButton>See more</StyledButton>

          <SuperButton>Save</SuperButton>
</div>
        </StyledBackground>


      </StyledBox>
  );
}


const StyledBox = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 600px) {
        flex-direction: column;
        flex: 1 1 100%; 
    }
`


export default App;
