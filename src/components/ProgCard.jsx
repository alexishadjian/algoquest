import progCards from '../data/progCards';

const ProgCard = ({ id }) => {

  const card = progCards.find((c) => c.id.toString() === id.toString());

  return (
    <div>
      <h4>{card.content}</h4>
    </div>
  );
};

export default ProgCard;