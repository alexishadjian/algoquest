const Reponse = ({ id, question, responseCardsIds }) => (
  <div>
    <h1>Réponse {id}</h1>
    <h2>{question}</h2>
    <p>{responseCardsIds}</p>
  </div>
);

export default Reponse;