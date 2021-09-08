import { ReactNode } from 'react';
import css from './Card.module.css';

export default function Card({ children }: { children: ReactNode }) {
  return <div className={css.root}>{children}</div>;
}
