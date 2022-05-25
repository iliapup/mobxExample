import { makeAutoObservable, runInAction } from 'mobx';

import { UsersStore } from 'app/modules/users/store/UsersStore';
import { NetworkStatus } from '../../../common/enums';

export class TodosStore {
  status = NetworkStatus.INITIAL;

  todos = [];

  private usersStore: UsersStore;

  constructor(usersStore: UsersStore) {
    this.usersStore = usersStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getTodos() {
    try {
      this.status = NetworkStatus.PENDING;

      const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());

      runInAction(() => {
        this.todos = todos;
        this.status = NetworkStatus.SUCCESS;
      });
    } catch (e) {
      this.status = NetworkStatus.ERROR;
    }
  }

  get userTodos() {
    return this.todos.filter((todo: any) => todo.userId === this.usersStore.userId);
  }
}
