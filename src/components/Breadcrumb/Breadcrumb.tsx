import { CaretRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import * as C from './Breadcrumb.styles';

import useBreadcrumbs from 'use-react-router-breadcrumbs';

function Breadcrumb() {
  const routes = [{ path: '/', breadcrumb: 'Inicio' }];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <C.Container>
      {breadcrumbs.map(({ match, breadcrumb }, i) => (
        <div key={i}>
          <Link to={match.pathname}>{breadcrumb}</Link>
          <CaretRight size={10} />
        </div>
      ))}
    </C.Container>
  );
}

export default Breadcrumb;
