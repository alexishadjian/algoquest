import ProgCard from '../components/ProgCard';


const PopupHelp = ({isOpenAnswer, setIsOpenAnswer, datas}) => {


  return (
    <div className="help-popup">
      <span className="back-btn" onClick={ () => setIsOpenAnswer(!isOpenAnswer)}>{'< back'}</span>
      <h1>Answer</h1>
      <div className="help-grp">
        <div>
          {datas.responseCardsIds.map( (cardId, index) => (
              <div className="prog-card" key={index}>
                  <ProgCard id={cardId} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupHelp;