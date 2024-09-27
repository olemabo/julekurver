import React, { FunctionComponent } from 'react';
import './breadcrumb.scss';

type LinkProp = {
  linkText: string; 
  href: string;
}

type BreadcrumbProps = {
    linkItems: LinkProp[];
  };
  
  const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ linkItems }) => {

    return (
      <div className='breadcrumb-container'>
        { linkItems?.length > 0 && linkItems.map((link, index) => (
          <>
            { index !== (linkItems.length - 1) ? 
              <>
                <a href={link.href} className='breadcrumb'>
                  {link.linkText} 
                </a> {"/"}
              </> :
              <span>{link.linkText}</span>
            }
          </> 
        ))}
      </div>
    );
  };
  
  export default Breadcrumb;