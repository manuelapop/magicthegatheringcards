import styled from 'styled-components';

interface CardProps {
  colors?: string;
  name?: string;
  url?: string;
  onClick?: () => void;
}

export const RootDiv = styled.div`
  align-items:center;
  background-color: #F8F8F8;
  border-radius: 10px;
  border: 2px solid #000000;
  padding:8px;
  width: 270px;
  height: 380px;
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

  const Card = (props: CardProps) => {
    const {name, colors, url, onClick} = props;

    return (
      <RootDiv onClick={onClick ? onClick : () => {}}>
       <TitleSpan data-testid="title-div">{name}</TitleSpan>
       <ImageDiv data-testid="image-div"><img src={url} style={{width:'200px', height:'300px'}}/></ImageDiv>
       <ContentsSpan data-testid="colors-div">{colors}</ContentsSpan>
       </RootDiv>
    );
  };
  
  export default Card;