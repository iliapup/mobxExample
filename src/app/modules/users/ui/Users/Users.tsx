import React, { useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { Button } from '@mui/material';
import { useStore } from '../../../../hooks/use-store';
import { NetworkStatus } from '../../../../common/enums';
// import { UserInfoStore } from '../../../userInfo/store/UserInfoStore';

// import { usersStore } from '../../store/UsersStore';

export const Users = observer(function Users() {
  const { usersStore } = useStore();

  // локальный стор
  // const [store] = useState(() => new UserInfoStore());

  const handleSelectUser = useCallback(
    (userId: string) => () => {
      usersStore.selectUser(userId);
    },
    [],
  );

  useEffect(() => {
    usersStore.getUsers();
  }, []);

  return (
    <>
      <h2>Users</h2>
      {usersStore.status === NetworkStatus.PENDING && <div>Загрузка</div>}
      {usersStore.users.map((user: any) => (
        <div key={user.id}>
          {/*<Button size="small" onClick={usersStore.testMethod}>
            Просто кнопка
          </Button>*/}
          <Button size="small" onClick={handleSelectUser(user.id)}>
            {user.name}
          </Button>
        </div>
      ))}
    </>
  );
});
