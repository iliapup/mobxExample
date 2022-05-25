import { makeAutoObservable, runInAction } from 'mobx';

import { NetworkStatus } from '../../../common/enums';

export class UsersStore {
  status = NetworkStatus.INITIAL;

  users = [];

  userId = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  selectUser(userId: string) {
    this.userId = userId;
  }

  testMethod() {}

  async getUsers() {
    try {
      this.status = NetworkStatus.PENDING;

      const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());

      runInAction(() => {
        this.users = users;
        this.status = NetworkStatus.SUCCESS;
      });
    } catch (e) {
      this.status = NetworkStatus.ERROR;
    }
  }

  get currentUser(): any {
    return this.users.find((user: any) => user.id === this.userId);
  }
}

// export const usersStore = new UsersStore();
