import ProgCard from '../components/ProgCard';


const PopupHelp = ({isOpenAnswer, setIsOpenAnswer, datas}) => {

  console.log(datas);
  return (
    <div className="help-popup">
      <span className="back-btn" onClick={ () => setIsOpenAnswer(!isOpenAnswer)}>{'< back'}</span>
      <h1>Answer</h1>
      <div className="help-grp">
        <div className="answer-container">
          {datas.responseCardsIds.map((cardId, index) => (
            <div key={index}>
              {Array.isArray(cardId) ? (
                cardId.map((el, innerIndex) => (
                  <div className="prog-card" key={innerIndex}>
                    <ProgCard id={el} />
                  </div>
                ))
              ) : (
                <div className="prog-card" key={index}>
                  <ProgCard id={cardId} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupHelp;