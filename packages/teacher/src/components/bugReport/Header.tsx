import styled from "@emotion/styled";

interface HeaderProps {
  isSubmitEnabled: boolean;
  handleReportCliCk: () => void;
}

const Header = ({ isSubmitEnabled, handleReportCliCk }: HeaderProps) => {
  return (
    <Container>
      <Title>버그 제보</Title>
      <Report isSubmitEnabled={isSubmitEnabled} onClick={handleReportCliCk}>
        제출
      </Report>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

const Report = styled.p<{ isSubmitEnabled: boolean }>`
  color: ${(props) =>
    props.isSubmitEnabled
      ? props.theme.colors.purple300
      : props.theme.colors.gray300};
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
`;

export default Header;
