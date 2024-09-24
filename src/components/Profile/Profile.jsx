import styles from './Profile.module.css';

const Profile = props => {
  const {
    name,
    tag,
    location,
    image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <img className={styles.img} src={image} alt={name} />

        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.itemname}>Followers </span>
          <span className={styles.itemcount}>{followers}</span>
        </li>

        <li className={styles.item}>
          <span className={styles.itemname}>Views </span>
          <span className={styles.itemcount}>{views}</span>
        </li>

        <li className={styles.item}>
          <span className={styles.itemname}>Likes </span>
          <span className={styles.itemcount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
