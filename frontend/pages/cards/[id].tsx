type Team = {
  id: string;
  name: string;
};

type Card = {
  id: string;
  cardName: string;
  cardNumber: string;
  year: number;
  rookie: boolean;
  autographed: boolean;
  relic: boolean;
  serial: string;
  serialOutOf: string;
  variation: string;
  notes: string;
  graded: boolean;
  grade: number;
  team: Team;
};

type CardDetailPageProps = {
  card: Card;
};
const CardDetail = ({ card }: CardDetailPageProps) => {
  return (
    <>
      <label for="cardNameInput">Card Name</label>
      <input id="cardNameInput" value={card.cardName}></input>
      <label for="cardNumberInput">Card Number</label>
      <input id="cardNumberInput" value={card.cardNumber}></input>
      <label for="yearInput">Year</label>
      <input id="yearInput" value={card.year}></input>
      <label for="rookieInput">Rookie?</label>
      <input id="rookieInput" type="checkbox" value={card.rookie}></input>
      <label for="autographedInput">Autographed?</label>
      <input
        id="autographedInput"
        type="checkbox"
        value={card.autographed}
      ></input>
      <label for="relicInput">Relic?</label>
      <input id="relicInput" type="checkbox" value={card.relic}></input>
      <label for="serialInput">Serial</label>
      <input id="serialInput" value={card.serial}></input>
      <label for="serialOutOfInput">Serial Out Of</label>
      <input id="serialOutOfInput" value={card.serialOutOf}></input>
      <label for="variationInput">Variation</label>
      <input id="variationInput" value={card.variation}></input>
      <label for="notesInput">Notes</label>
      <input id="notesInput" value={card.notes}></input>
      <label for="gradedInput">Graded?</label>
      <input id="gradedInput" type="checkbox" value={card.graded}></input>
      <label for="gradeInput">Grade</label>
      <input id="gradeInput" value={card.grade}></input>
    </>
  );
};

export default CardDetail;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3000/cards/`);
  const cards = await res.json();
  console.log(cards);

  // Get the paths we want to pre-render based on posts
  const paths = cards.map((card) => ({
    params: { id: `${card.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const res = await fetch(`http://localhost:3000/cards/${id}`);

  const json = await res.json();

  return {
    props: {
      card: json,
    },
  };
}
