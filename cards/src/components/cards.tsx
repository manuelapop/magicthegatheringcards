import React from "react";
import { useEffect, useState } from "react";
import Card, {RootDiv as CardRootDiv}  from "./card";
import styled from 'styled-components';
import ReactModal from 'react-modal';
import CardDetail from "./cardDetail";

const ModalContents = styled.div`
    width: 600px;
    height: auto;
    margin: 0 auto;
    padding: 10px;
`;

const RootDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    & ${CardRootDiv}:not(:first-child) {
        margin: 20px;
      }
    & ${CardRootDiv}:first-child {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const StyledButton = styled.div`
    margin: 0 auto;
    width:600px;        
`;

const SearchDiv = styled.div`
    display: flex;
`;

const SearchIndiviadualDiv = styled.div`
    margin:20px;
`;

  const RepoCards = () => {
    let [cards, setCards] = useState<any[]>([]);
    let [filteredCards, setSearchedCards] = useState<any[]>([]);
    let [showModal, setShowModal] = useState(false);
    let [modalCard, setModalCard] = useState({artist:'', name:'', colors:'', imageUrl:'', text: '', type: ''});

   useEffect(() => {
    fetch("https://api.magicthegathering.io/v1/cards?page=3&pageSize=12")
    .then(response => response.json())
    .then(data => {setCards(data.cards); setSearchedCards(data.cards);})
    },[])
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal= () => {setShowModal(false)}
    const handleSearchName= (event: any) => {
    let value = event.target.value.toLowerCase();
        if (!value) {
            setSearchedCards(cards);
        } else {
            const result = filteredCards.filter((data) => {
                return data.name.toLowerCase().includes(value);
                }
            );
            setSearchedCards(result);
        }
    }

    const handleSearchColors= (event: any) => {
        let input = event.target.value.toLowerCase();
        let values = input.split(',');
        if (!input) {
            setSearchedCards(cards);
        } else {
            const r = cards.filter(d => d.colors.some((c: any) => values.some((e: string) => e.toLowerCase() === c.toLowerCase())));
        
            if (r.length > 0) {
                setSearchedCards(r);
                }
            }
        }

    return (
        <>
        <SearchDiv>
        <SearchIndiviadualDiv>
        <label>Search Cards by name: </label><input type="text" onChange={(event) => handleSearchName(event)}/>
        </SearchIndiviadualDiv>
        <SearchIndiviadualDiv>
        <label>Search Cards by colors with comma delimiter: </label><input type="text" onChange={(event) => handleSearchColors(event)}/>
        </SearchIndiviadualDiv>
        </SearchDiv>
           <div>
           <ReactModal 
              ariaHideApp={false}
              isOpen={showModal}
              contentLabel="Inline Styles Modal Example"
              style={{
                 overlay: {
                   backgroundColor: '#F8F8F8'
                 },
                 content: {
                     color: 'black'
                 },
               }}
           >
               <ModalContents>
                   <CardDetail 
                       artist={modalCard.artist}
                       colors={modalCard.colors} 
                       name={modalCard.name} 
                       text={modalCard.text} 
                       type={modalCard.type} 
                       url={modalCard.imageUrl} />
               </ModalContents>
               <StyledButton><button onClick={handleCloseModal}>Close</button></StyledButton>
           </ReactModal>
          </div>
        <RootDiv>
            {filteredCards.map(x => 
            <Card 
            key={x.id} 
            name={x.name} 
            colors={x.colors} 
            url={x.imageUrl} 
            onClick={() => {
                    setModalCard(modalCard => ({...modalCard, ...x}));
                    handleOpenModal();
                }}/>)}
       </RootDiv>
       </>
    );
  };
  
  export default RepoCards;