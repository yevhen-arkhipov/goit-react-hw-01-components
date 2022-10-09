import profile from 'data/profile.json';
import statistics from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
import { TransactionHistory } from '../Transaction/TransactionHistory';
import { Box } from 'components/Box/Box';

export const App = () => {
  return (
    <>
      <Box width="1280px" bg="bodyColor" boxShadow="outline" as="main">
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
      </Box>
    </>
  );
};
