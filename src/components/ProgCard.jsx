import progCards from '../data/progCards';

const ProgCard = ({ id }) => {

  const card = progCards.find((c) => c.id.toString() === id.toString());

  return (
    <div>
      <h3>{card.content}</h3>
    </div>
  );
};

export default ProgCard;