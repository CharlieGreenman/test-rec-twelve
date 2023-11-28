import styles from './hello.module.scss';

/* eslint-disable-next-line */
export interface HelloProps {}

export function Hello(props: HelloProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Hello!</h1>
    </div>
  );
}

export default Hello;
