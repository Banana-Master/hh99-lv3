import React, { useState } from "react";
import styled from "styled-components";
import { SmallButton, yellowColor } from "./Button";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    // 쉼표를 제거한 문자열을 input에 저장
    const input = event.target.value.split(",").join("");
    if (input === "") setPrice("0");
    // input이 0보다 클 때 : 숫자만 들어있을 때
    if (Number(input) > 0) {
      const priceSplit = input.split("");
      if (priceSplit.length > 3) {
        // 3자리 수 마다 , 를 추가
        for (let i = priceSplit.length - 3; i > 0; i -= 3) {
          priceSplit.splice(i, 0, ",");
        }
        // 쉼표가 추가된 문자열을 setPrice로 적용
        setPrice(priceSplit.join(""));
      } else {
        // Number(input)을 하면 '0123' 일 경우 --> 123으로 됨
        return setPrice(Number(input));
      }
    } else {
      return price;
    }
  };

  const saveButtonHandler = () => {
    if (name !== "" && price !== "0") {
      alert(`{ name: ${name} price: ${price} }`);
    } else {
      alert(`이름과 가격을 모두 입력하세요`);
    }
  };

  return (
    <>
      <h1>Input</h1>
      <InputStateBoxs>
        <InputBox>
          <p>이름</p>
          <InputText type="text" value={name} onChange={nameChangeHandler} />
        </InputBox>

        <InputBox>
          <p>가격</p>
          <InputText type="text" value={price} onChange={priceChangeHandler} />
        </InputBox>

        <SmallButton bgcolor={yellowColor} onClick={saveButtonHandler}>
          저장
        </SmallButton>
      </InputStateBoxs>
    </>
  );
}

const InputStateBoxs = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
const InputText = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 5px;
`;

export default Input;
