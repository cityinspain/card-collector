import { NextPage } from "next";
import Link from "next/link";

type Card = {
  id: string;
  cardName: string;
  cardNumber: string;
};

type CardPageProps = {
  cards: Card[];
};

const Cards = ({ cards }: CardPageProps) => {
  return (
    <>
      <h1>My Cards</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <>
              <Link
                href={{
                  pathname: `/cards/${card.id}`,
                }}
              >
                <tr key={card.id} style={{ cursor: "pointer" }}>
                  <td>{card.cardName}</td>
                  <td>{card.cardNumber}</td>
                </tr>
              </Link>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
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
