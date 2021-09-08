import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import css from './AppLink.module.css';

export default function AppLink({
  href,
  menu,
  children,
}: {
  href: string;
  menu?: boolean;
  children: ReactNode;
}) {
  const router = useRouter();

  if (href.startsWith('/')) {
    const isCurrent = menu && href !== '/' && router.pathname.includes(href);

    return (
      <Link href={href}>
        <a className={isCurrent ? css.current : undefined}>{children}</a>
      </Link>
    );
  }

  // probably a link to an external site
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
