import * as S from "./WriterImageBox.style";

const WriterImageBox = ({ data }) => {
  return (
    <S.Container>
      {data.recentMessages?.map(({ profileImageURL, id }) => {
        return <S.Box $profileImageUrl={profileImageURL} key={id}></S.Box>;
      })}

      {data?.messageCount > 3 && (
        <S.NumberBox>
          <p className="font-12-regular">+{data?.messageCount - 3}</p>
        </S.NumberBox>
      )}
    </S.Container>
  );
};

export default WriterImageBox;
