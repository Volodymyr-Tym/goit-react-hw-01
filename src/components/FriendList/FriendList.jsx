import styles from './FriendList.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(friend => {
        return (
          <li className={styles.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
