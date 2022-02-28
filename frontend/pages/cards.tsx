import { NextPage } from "next";

type Card = {
  id: string;
  cardName: string;
  cardNumber: string;
};

type CardPageProps = {
  cards: Card[];
};

const Cards = ({ cards }: CardPageProps) => {
  return cards.map((card) => (
    <p key={card.id}>
      {card.cardNumber} {card.cardName}
    </p>
  ));
};

export default Cards;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/cards");

  const json = await res.json();
  return {
    props: {
      cards: json,
    },
  };
  //   return {
  //     props: {

  //     },
  //   }
  // }
}
