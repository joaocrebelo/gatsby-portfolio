// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    {/* <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link> */}

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    {/* Replaced {author.bio} */}
    <p className={styles['author__subtitle']} style={{ marginBottom: 0 }}>💻 Information Systems Engineer</p>
    <p className={styles['author__subtitle']} style={{ marginBottom: 0.5, marginTop: 0.5 }}>🌍 Seeking new challenges</p>
    <p className={styles['author__subtitle']} style={{ marginTop: 1.5 }}>🚧 Site under construction</p>
  </div>
);

export default Author;
