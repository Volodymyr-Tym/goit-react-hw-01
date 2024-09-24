import './App.css';

import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

function App() {
  return (
    <div>
      <Section padding line title="Profile">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </Section>

      <Section padding line title="Friend List Item">
        <FriendList friends={friends} />
      </Section>

      <Section padding title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
