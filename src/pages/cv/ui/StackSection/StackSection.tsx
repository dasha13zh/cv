import data from '../../../../shared/api/data.json';
import {
  mapTechStack,
  type TechStackType,
} from '../../../../shared/api/stackList';
import { Icon } from '../../../../shared/ui/Icon/Icon';

import './StackSection.css';

type StackElementProps = { icon: TechStackType; isTitle?: boolean };

const StackElement = ({ icon, isTitle }: StackElementProps) => {
  const data = mapTechStack[icon];
  return data ? (
    <div
      title={icon}
      className="stack-element"
      key={icon}
      content={data?.description}>
      {data?.emoji ?? <Icon size={'24px'} icon={data.icon} />}
      {isTitle ? <p>{data.description}</p> : null}
    </div>
  ) : null;
};

export const StackSection = () => {
  return (
    <>
      <h3>Стек</h3>
      <section className="stack-section">
        {data.stack.map((item, index) => (
          <StackElement key={index} icon={item as TechStackType} isTitle />
        ))}
      </section>
    </>
  );
};
