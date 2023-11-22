import { useParams } from 'react-router-dom';
import { useState } from 'react';
import reponses from '../data/reponses';
import Timer from '../components/Timer';
import PopupHelp from '../components/PopupHelp';
import PopupAnswer from '../components/PopupAnswer';

const Home = () => {

    const { id } = useParams();
    const datas = reponses.find((reponse) => reponse.id.toString() === id);

    const [isOpenHelp, setIsOpenHelp] = useState(false);
    const [isOpenAnswer, setIsOpenAnswer] = useState(false);

    return (
        <div className="container">
            { isOpenHelp && <PopupHelp isOpenHelp={isOpenHelp} setIsOpenHelp={setIsOpenHelp} />}
            { isOpenAnswer && <PopupAnswer isOpenAnswer={isOpenAnswer} setIsOpenAnswer={setIsOpenAnswer} datas={datas} />}
            <div className="question title">
                <h2 className="">{datas.question}</h2>
                <button className="secondary" onClick={ () => setIsOpenHelp(!isOpenHelp) }>Help</button>
            </div>
            <Timer />
            <button className="primary" onClick={ () => setIsOpenAnswer(!isOpenAnswer)} >Show answer</button>

        </div>
    );
};

export default Home;