'use client';

import Link from 'next/link';
import './breadcrumb.css';

type LinkProp = {
  linkText: string;
  href: string;
};

type BreadcrumbProps = {
  linkItems: LinkProp[];
};

export default function Breadcrumb({
  linkItems
}: BreadcrumbProps) {
  return (
    <div className="breadcrumb-container">
      {linkItems?.length > 0 &&
        linkItems.map((link, index) => (
          <div key={index}>
            {index !== linkItems.length - 1 ? (
              <>
                <Link href={link.href} className="breadcrumb">
                  {link.linkText}
                </Link>{' '}
                <img src="/images/icons/breadcrumb_divider.svg" alt="breadcrumb divider" className="breadcrumb-divider" />
              </>
            ) : (
              <span >{link.linkText}</span>
            )}
          </div>
        ))}
    </div>
  );
};