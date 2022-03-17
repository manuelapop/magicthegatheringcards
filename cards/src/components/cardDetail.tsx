import styled from 'styled-components';

interface CardDetailProps {
  artist?: string;
  colors?: string;
  name?: string;
  text?: string;
  type?: string;
  url?: string;
}

export const RootDiv = styled.div`
  align-items:center;
  background-color: #F8F8F8;
  border-radius: 10px;
  border: 2px solid #000000;
  padding:8px;
  width: 450px;
  height: 500px;
  text-align: center;
`;

const TitleSpan = styled.div`
  color: black;
  font-size: 18px;
`;

const ContentsSpan = styled.div`
  color: black;
  font-size: 14px;
  margin-top: 15px;
`;

const ImageDiv = styled.div`
  margin-top:5px;
`;

  const CardDetail = (props: CardDetailProps) => {
    const {artist, name, colors, url, text, type} = props;

    return (
      <RootDiv>
       <TitleSpan data-testid="title-div-card">{name}</TitleSpan>
       <ImageDiv data-testid="image-div-card"><img src={url} style={{width:'200px', height:'300px'}}/></ImageDiv>
       <ContentsSpan data-testid="artist-div">Artist: {artist}</ContentsSpan>
       <ContentsSpan data-testid="color-div">Color: {colors}</ContentsSpan>
       <ContentsSpan data-testid="text-div">{text}</ContentsSpan>
       <ContentsSpan data-testid="type-div">Type: {type}</ContentsSpan>
       </RootDiv>
    );
  };
  
  export default CardDetail;