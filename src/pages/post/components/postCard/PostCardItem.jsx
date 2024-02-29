import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import { getUserPaper } from "./api";
import { formatDate } from "./formatData";
import { useParams } from "react-router-dom";
export function PostCardItem() {
  const [cardData, setCardData] = useState([]);

  const { recipientId } = useParams();
  console.log(recipientId);
  async function handleCardData() {
    const jsonData = await getUserPaper();
    const paperData = jsonData.results;
    setCardData(paperData);
  }

  useEffect(() => {
    handleCardData();
  }, []);
  console.log(cardData);
  return (
    <>
      {console.log(cardData)}
      {cardData.map((el) => (
        <S.CardItem key={el.id}>
          <S.CardHeader>
            <S.ProfileImage
              src={el.profileImageURL}
              alt='이미지'
            ></S.ProfileImage>
            <S.CardHeaderContainer>
              <S.CardHeaderName>
                <S.From>From.</S.From>
                <S.Name>{el.sender}</S.Name>
              </S.CardHeaderName>
              <S.Relationship>가족</S.Relationship>
            </S.CardHeaderContainer>
            <S.DeleteButton>
              <img src={`/assets/post/deleted.svg`} alt='삭제휴지통'></img>
            </S.DeleteButton>
          </S.CardHeader>
          <S.Content fontFamily={el.font}>{el.content}</S.Content>
          <S.Data>{formatDate(el.createdAt)}</S.Data>
        </S.CardItem>
      ))}
    </>
  );
}
