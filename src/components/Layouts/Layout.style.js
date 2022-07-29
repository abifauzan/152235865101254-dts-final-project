import styled from "styled-components";
import Media, { sizes } from "../../styles/Media";
import { GetColor } from "../../styles/Mixin";

export const MainLayout = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: #f4f7fb;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: ${sizes.laptop}px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
  z-index: 3;

  ${Media.tab`
        padding-bottom: 0;
    `}
`;

export const BlurTop = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -140px;
  width: 300px;
  height: 300px;
  border-radius: 9999px;
  background: ${(props) => GetColor(props.theme).light};
  filter: blur(30px);
`;

export const BlurBottom = styled.div`
  position: absolute;
  bottom: -20px;
  right: -100px;
  width: 250px;
  height: 250px;
  border-radius: 9999px;
  background: ${(props) => GetColor(props.theme).primary};
  filter: blur(100px);
`;
