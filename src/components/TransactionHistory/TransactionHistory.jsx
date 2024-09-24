import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.headname}>Type</th>
          <th className={styles.headname}>Amount</th>
          <th className={styles.headname}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.item}>{item.type}</td>
              <td className={styles.item}>{item.amount}</td>
              <td className={styles.item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
