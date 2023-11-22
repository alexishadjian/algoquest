import { useParams } from 'react-router-dom';
import { useState } from 'react';
import reponses from '../data/reponses';
import ProgCard from '../components/ProgCard';
import { NavLink } from "react-router-dom";
import Timer from '../components/Timer';

const Home = () => {

    const { id } = useParams();
    const datas = reponses.find((reponse) => reponse.id.toString() === id);


    const [repSate, setRepSate] = useState(false);


    return (
        <div className="container">
            <div className="question title">
                <h2 className="">{datas.question}</h2>
                <NavLink to="/help" className="help-btn"><button className="secondary">Help</button></NavLink>
            </div>
            <Timer />
            <button className="primary" onClick={ () => setRepSate(!repSate)} >Show answer</button>
            {repSate ? (
                <div>
                    {datas.responseCardsIds.map( (cardId, index) => (
                        <div className="prog-card" key={index}>
                            <ProgCard id={cardId} />
                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}

        </div>
    );
};

export default Home;