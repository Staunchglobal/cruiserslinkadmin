import { Link, useParams } from 'react-router-dom';
import { ServiceCategories } from '../util/constants';
import Service from './Service';

function Services() {
  const { id } = useParams();
  const intId = JSON.parse(id);
  const limit = 15;
  return (
    <div>
      <h3 className="text-center">Services</h3>
      {intId !== 0 ?
        <Service id={JSON.parse(id)} limit={limit} /> :
        ServiceCategories.filter(a => a.id !== 4 && a.id !== 10).map(category => {
          return (
            <Service id={JSON.parse(category.id)} key={category.category_key} limit={5} />
          )
        })
      }
    </div>
  );
}

export default Services;