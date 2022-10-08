import profile from 'data/profile.json';
import statistics from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
import { TransactionHistory } from '../Transaction/TransactionHistory';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={profile.username}
          tag={profile.tag}
          location={profile.location}
          avatar={profile.avatar}
          stats={profile.stats}
        />
        <Statistics title="Upload stats" statistics={statistics} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </Container>
    </>
  );
};
