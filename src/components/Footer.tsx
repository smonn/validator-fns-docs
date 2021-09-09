import Image from 'next/image';
import AppLink from './AppLink';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.root}>
      <p className={css.icons}>
        <AppLink href="https://github.com/smonn/validator-fns">
          <Image
            src="/github.svg"
            alt="validator-fns on GitHub"
            width={32}
            height={32}
          />
        </AppLink>

        <AppLink href="https://www.npmjs.com/package/validator-fns">
          <Image
            src="/npm.svg"
            alt="validator-fns on npm"
            width={32}
            height={32}
          />
        </AppLink>
      </p>
      <p>
        Made by <AppLink href="https://github.com/smonn">@smonn</AppLink>
      </p>
    </footer>
  );
}
