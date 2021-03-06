import { Link, useParams } from 'react-router-dom';
import Service from './Service';

function Services() {
  const { id } = useParams();
  const intId = JSON.parse(id);
  return (
    <div>
      <h3 className="text-center">Services</h3>
      {intId !== 0 ?
        <Service id={JSON.parse(id)} /> :
        <Service id={1} />
      }
    </div>
  );
}

export default Services;