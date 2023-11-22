import { useParams } from 'react-router-dom';
import Reponse from '../components/Reponse';
import reponses from '../data/reponses';

const ReponsePage = () => {
  const { id } = useParams();

  const selectedReponse = reponses.find((reponse) => reponse.id.toString() === id);
   
  if (!selectedReponse) {
    return <div>Réponse non trouvée</div>;
  }

  return (
    <div>
      <Reponse {...selectedReponse} />
    </div>
  );
};

export default ReponsePage;