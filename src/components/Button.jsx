import React from "react";
import styled from "styled-components";
import { BsTruck, BsTrophy } from "react-icons/bs";

function Button() {
  const primaryButtonOnclickHandler = () => {
    alert(`버튼을 만들어 보세요`);
  };

  const negativeButtonOnclickHandler = () => {
    prompt(`어렵나요?`);
  };

  return (
    <>
      <h1>Button</h1>

      <ButtonDiv>
        <LargeButton color={yellowColor} onClick={primaryButtonOnclickHandler}>
          Large Primary Button &nbsp;
          <BsTruck />
        </LargeButton>

        <MediumButton bgcolor={yellowColor}>Medium</MediumButton>
        <SmallButton bgcolor={yellowColor}>Small</SmallButton>
      </ButtonDiv>

      <ButtonDiv>
        <LargeButton color={jeanColor} onClick={negativeButtonOnclickHandler}>
          Large Negative Button &nbsp; <BsTrophy />
        </LargeButton>
        <MediumButton bgcolor={jeanColor}>Medium</MediumButton>
        <SmallButton bgcolor={jeanColor}>Small</SmallButton>
      </ButtonDiv>
    </>
  );
}

export const yellowColor = `#FFC436`;
export const jeanColor = `#337CCF`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LargeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  border: 3px solid ${(props) => props.color};
  background-color: white;
  width: 230px;
  height: 50px;
  border-radius: 8px;
  font-weight: 600;
`;

const MediumButton = styled.button`
  height: 45px;
  width: 130px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  border-radius: 8px;
`;

export const SmallButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  border-radius: 8px;
`;

export default Button;
