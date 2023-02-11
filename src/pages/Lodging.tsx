import { LoaderFunctionArgs } from 'react-router-dom';
import { getLodging } from 'services/Api';
import Article from 'components/article/Article';

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('Missing params');
  }
  return getLodging(params.id);
}
function Lodging() {
  return <Article />;
}
export default Lodging;
