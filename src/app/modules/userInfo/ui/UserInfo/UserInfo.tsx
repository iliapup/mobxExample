import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { autorun } from 'mobx';
import { useStore } from '../../../../hooks/use-store';

export const UserInfo = observer(function UserInfo() {
  const { createUserInfoStore, usersStore } = useStore();
  const [store] = useState(createUserInfoStore);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: usersStore.currentUser,
  });

  useEffect(() => autorun(() => {
    setValue('name', usersStore.currentUser?.name);
    setValue('email', usersStore.currentUser?.email);
  }), []);

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit(store.submit)}>
        <input {...register('name')} />
        <input {...register('email')} />
        <input type="submit" />
      </form>
    </div>
  );
});
