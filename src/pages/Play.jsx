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
            <h2 className="question title">{datas.question}</h2>
            <NavLink to="/help" className="help-btn"><button>Help</button></NavLink>
            <Timer />
            <button className="" onClick={ () => setRepSate(!repSate)} >Show answer</button>
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