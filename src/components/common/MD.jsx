import React, { useEffect, useState } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const MD = ({ md }) => {

  const [ html, setHtml ] = useState('');

  useEffect(() => {

    remark()
      .use(remarkHtml)
      .process(md)
      .then((out) => {
        setHtml(out);
      });

  }, [ md ]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html}} />
  );
};

export default MD;