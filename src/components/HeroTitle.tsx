import { ReactNode } from 'react';
import css from './HeroTitle.module.css';

export default function HeroTitle({ children }: { children: ReactNode }) {
  return <h1 className={css.root}>{children}</h1>;
}
