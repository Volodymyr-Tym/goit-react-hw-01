import clsx from 'clsx';

import styles from './Section.module.css';

const Section = ({ children, padding, line, title }) => {
  const sectionstyle = clsx(styles.section, padding && styles.padding);
  const containerclass = clsx(styles.container, line && styles.line);

  return (
    <section className={sectionstyle}>
      <div className={containerclass}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
