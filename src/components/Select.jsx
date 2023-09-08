import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowDownShort } from "react-icons/bs";

function Select() {
  const languageList = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [language, setLanguage] = useState(languageList[0]);
  const [showList, setShowList] = useState(false);

  const [language2, setLanguage2] = useState(languageList[0]);
  const [showList2, setShowList2] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
    setShowList2(false);
  };
  const liClickHandler = (index) => {
    setLanguage(languageList[index]);
    toggleShowList();
  };

  const toggleShowList2 = () => {
    setShowList2(!showList2);
    setShowList(false);
  };
  const liClickHandler2 = (index) => {
    setLanguage2(languageList[index]);
    toggleShowList2();
    setShowList(false);
  };

  return (
    <>
      <Wrap>
        <h1>Select</h1>
        <FlexBox>
          <div>
            <SelectButton onClick={toggleShowList}>
              {language} <BsArrowDownShort />
            </SelectButton>
            {showList && (
              <div style={{ position: "absolute" }}>
                <LanguageUl>
                  {languageList.map((item, index) => {
                    return (
                      <LanguageLi
                        key={index}
                        onClick={() => liClickHandler(index)}
                      >
                        {item}
                      </LanguageLi>
                    );
                  })}
                </LanguageUl>
              </div>
            )}
          </div>

          <div>
            <SelectButton onClick={toggleShowList2}>
              {language2} <BsArrowDownShort />
            </SelectButton>
            {showList2 && (
              <div>
                <LanguageUl>
                  {languageList.map((item, index) => {
                    return (
                      <LanguageLi
                        key={index}
                        onClick={() => liClickHandler2(index)}
                      >
                        {item}
                      </LanguageLi>
                    );
                  })}
                </LanguageUl>
              </div>
            )}
          </div>
        </FlexBox>
      </Wrap>
    </>
  );
}

const FlexBox = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  border: 3px solid rgb(221, 221, 221);
  margin-top: 30px;
  height: 200px;
  overflow: hidden;
`;

const SelectButton = styled.button`
  width: 245px;
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
`;

const LanguageUl = styled.ul`
  width: 245px;
  height: 40px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  margin-left: 10px;
`;

const LanguageLi = styled.li`
  height: 40px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  background-color: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
    border-radius: 5px;
  }
  &:first-child {
    border-top: 1px solid lightgrey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-child {
    border-bottom: 1px solid lightgrey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default Select;
