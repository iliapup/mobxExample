import { makeAutoObservable } from 'mobx';

import { UsersStore } from 'app/modules/users/store/UsersStore';

export class UserInfoStore {
  private usersStore: UsersStore;

  form = {
    name: '',
    email: '',
  };

  constructor(usersStore: UsersStore) {
    this.usersStore = usersStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  submit(data: any) {
    console.info('data = ', data);
    this.form = data;
  }

  get userInfo(): any {
    if (!this.usersStore.currentUser) {
      return null;
    }

    return {
      name: this.usersStore.currentUser.name,
      email: this.usersStore.currentUser.email,
    };
  }
}
