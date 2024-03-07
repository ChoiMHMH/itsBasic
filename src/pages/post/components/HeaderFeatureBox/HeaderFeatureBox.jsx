import MessageRecipient from "../MessageRecipient/MessageRecipient";
import HeaderToolBar from "../HeaderToolBar/HeaderToolBar";
import * as S from "./HeaderFeatureBox.style";
const HeaderFeatureBox = ({ amountDataCount }) => {
  /**
   * @description 헤더부분에 기능적인 역활을하는 컴포넌트들을 한곳에 담은 컴포넌트입니다.
   */
  return (
    <S.ContainerWrapper>
      <S.Container>
        <MessageRecipient />
        <HeaderToolBar amountDataCount={amountDataCount} />
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderFeatureBox;
