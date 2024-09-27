import './breadcrumb.scss';

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
          <>
            {index !== linkItems.length - 1 ? (
              <>
                <a href={link.href} className="breadcrumb">
                  {link.linkText}
                </a>{' '}
                {'/'}
              </>
            ) : (
              <span>{link.linkText}</span>
            )}
          </>
        ))}
    </div>
  );
};