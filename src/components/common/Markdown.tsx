import { useEffect, useState } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import styles from './Markdown.module.scss';

import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-tsx.min.js';

interface Props {
  markdown: string;
}

export function Markdown({ markdown }: Props) {
  const [html, setHtml] = useState('');

  const renderer = new marked.Renderer();

  function renderMarkdown() {
    if (!markdown) {
      setHtml('');
      return;
    }

    renderer.image = function (href) {
      return `<img loading="lazy" src=${href} alt="Post Image" />`;
    };

    renderer.table = function (header, body) {
      return `<div style="overflow: auto;"><table>${header}${body}</table></div>`;
    };

    marked.setOptions({
      breaks: true,
      renderer,
    });

    setHtml(marked.parse(markdown) as string);
  }

  useEffect(() => {
    renderMarkdown();
  });

  useEffect(() => {
    return () => {
      Prism.highlightAll();
    };
  }, [html]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={styles.markdown}
    />
  );
}
