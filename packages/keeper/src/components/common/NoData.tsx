import styled from "@emotion/styled";

interface Props {
  text: string;
}

const NoData = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

const Text = styled.p`
  font-size: 50px;
`;

export default NoData;
