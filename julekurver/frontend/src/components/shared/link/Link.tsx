import React, { FunctionComponent } from 'react';
import './Link.scss';

export type TargetType = '_blank' | '';

type LinkProps = {
  linkTitle?: string;
  href: string;
  target?: TargetType;
  className?: string;
  icon?: any;
};

const Link: FunctionComponent<LinkProps> = ({ href, target, className, icon, linkTitle }) => {

  return (
    <a target={target} href={href} className={`jds-link ${className}`}>
      {icon && <span className="icon-container">{icon}</span>}
      {linkTitle && <span>{linkTitle}</span>}
    </a>
  );
};

export default Link;