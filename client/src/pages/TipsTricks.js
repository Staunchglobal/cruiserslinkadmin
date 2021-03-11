import { Link, useParams } from 'react-router-dom';
import { TipsAndTricksCategories } from '../util/constants';
import TipAndTrick from './TipAndTrick';

function TipsTricks() {
  const { id } = useParams();
  const intId = JSON.parse(id);
  const limit = 15;
  return (
    <div>
      <h3 className="text-center">Tips & Tricks</h3>
      { id !== 0 ?
        <TipAndTrick key={id} id={intId} limit={limit} /> :
        Object.keys(TipsAndTricksCategories).map(a => {
          return (
            <TipAndTrick key={a} id={JSON.parse(a)} limit={limit} />
          )
        })

      }
    </div>
  );
}

export default TipsTricks;