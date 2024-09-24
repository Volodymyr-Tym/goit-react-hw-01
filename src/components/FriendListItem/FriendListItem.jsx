import clsx from 'clsx';

import styles from './FriendListItem.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  const statusstyle = clsx(styles.status, isOnline && styles.online);
  return (
    <>
      <img src={avatar} alt={name} width="80" />
      <p className={styles.name}>{name}</p>
      <p className={statusstyle}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
};

export default FriendListItem;
