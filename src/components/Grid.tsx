import { ReactNode } from 'react';
import css from './Grid.module.css';

export default function Grid({ children }: { children: ReactNode }) {
  return <div className={css.root}>{children}</div>;
}
