import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/duotoneDark';
import React, { ReactNode } from 'react';

const theme: PrismTheme = {
  plain: {
    color: '#9EFEFF',
    backgroundColor: '#2D2A55',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 238, 128)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(173, 219, 103)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#b362ff',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(255, 255, 255)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(255, 98, 140)',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'rgb(165, 255, 144)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(255, 238, 128)',
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: 'rgb(255, 98, 140)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(255, 180, 84)',
      },
    },
    {
      types: [
        'keyword',
        'operator',
        'property',
        'namespace',
        'tag',
        'selector',
        'doctype',
      ],
      style: {
        color: 'rgb(255, 157, 0)',
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'class-name'],
      style: {
        color: 'rgb(250, 208, 0)',
      },
    },
  ],
};

export function Code({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  const language = className.replace(/language-/, '') as Language;
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            overflow: 'scroll',
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
