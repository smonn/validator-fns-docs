import { ReactNode } from 'react';
import css from './Center.module.css';

export default function Center({ children }: { children: ReactNode }) {
  return <div className={css.root}>{children}</div>;
}
