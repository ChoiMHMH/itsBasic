import { useState } from "react";
import * as S from "./HeaderShareButton.style";
import ShareDropDownModal from "../ShareDropdownModal/ShareDropdownModal";
/**
 * @description 공유기능을 담당하는 버튼입니다
 */
const HeaderShareButton = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleModalClick = (e) => {
    setIsShowModal((prev) => !prev);
  };
  return (
    <>
      <S.Button
        onClick={(e) => {
          console.log(e.target);
          handleModalClick();
        }}
      >
        <img
          src='/assets/post/header_share_button_icon.svg'
          className='share-button-image'
          alt='share-button'
        />
      </S.Button>

      {isShowModal && <ShareDropDownModal setIsShowModal={setIsShowModal} />}
    </>
  );
};

export default HeaderShareButton;
