import { IconProps } from '@phosphor-icons/react';
import { LinkProps } from 'react-router-dom';
import * as C from './Module.styles';

interface IModule extends LinkProps {
  icon?: React.ComponentType<IconProps>;
  title: string;
}

function Module({ title, icon: Icon, ...props }: IModule) {
  return (
    <C.Container {...props}>
      <div>
        {Icon && <Icon size={20} />}
        <h4>{title}</h4>
      </div>

      <p>Loren Inpsum teste de subtitulo</p>
    </C.Container>
  );
}

export default Module;
