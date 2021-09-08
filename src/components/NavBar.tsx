import AppLink from './AppLink';
import css from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={css.root}>
      <header>
        <AppLink href="/">validator-fns</AppLink>
      </header>
      <nav>
        <ul>
          <li>
            <AppLink menu href="/getting-started">
              Getting started
            </AppLink>
          </li>
          <li>
            <AppLink menu href="/examples">
              Examples
            </AppLink>
          </li>
          <li>
            <AppLink menu href="/api-reference">
              API reference
            </AppLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
