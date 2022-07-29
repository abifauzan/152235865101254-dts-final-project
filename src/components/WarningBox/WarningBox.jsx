import styled from "styled-components";
import Color from "../../styles/Color";
import { SetFont, TextSize, TextWeight } from "../../styles/Mixin";

const Box = styled.div`
  width: 100%;
  height: 40px;
  background: ${Color.electric.primary};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    ${SetFont({
      size: TextSize.bodySm,
      color: Color.white,
      weight: TextWeight.bold,
    })}
  }
`;

const WarningBox = ({ children }) => {
  return (
    <Box>
      <span>{children}</span>
    </Box>
  );
};

export default WarningBox;
