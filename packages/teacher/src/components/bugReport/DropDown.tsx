import { dropDown } from "@/assets/outingAccept";
import { ISortOption, bugReportOption } from "@/constants/DropDownItem";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

interface DropDownProps {
  dropDownValue: ISortOption;
  setDropDownValue: React.Dispatch<React.SetStateAction<ISortOption>>;
}

const DropDown = ({ dropDownValue, setDropDownValue }: DropDownProps) => {
  const [isFold, setIsFold] = useState(true);

  const changeIsFoldState = () => {
    setIsFold(!isFold);
  };

  const handleOptionClick = (value: ISortOption) => {
    setDropDownValue(value);
    changeIsFoldState();
  };

  return (
    <div>
      <Head>
        {dropDownValue.value}
        <Image
          width={8}
          height={4}
          src={dropDown}
          alt=""
          onClick={changeIsFoldState}
        />
      </Head>
      {!isFold && (
        <Body>
          {bugReportOption.map((value) => (
            <p key={value.option} onClick={() => handleOptionClick(value)}>
              {value.value}
            </p>
          ))}
        </Body>
      )}
    </div>
  );
};

const Head = styled.button`
  display: flex;
  padding: 6px 12px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray900};
`;

const Body = styled.span`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  gap: 20px;
  padding: 16px;
  position: fixed;
  top: 140px;
`;

export default DropDown;
