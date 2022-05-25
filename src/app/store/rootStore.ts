import { TodosStore } from '../modules/todos/store/TodosStore';
import { UserInfoStore } from '../modules/userInfo/store/UserInfoStore';
import { UsersStore } from '../modules/users/store/UsersStore';

export class RootStore {
  usersStore: UsersStore;

  todosStore: TodosStore;

  constructor() {
    this.usersStore = new UsersStore();
    this.todosStore = new TodosStore(this.usersStore);
  }

  createUserInfoStore = () => new UserInfoStore(this.usersStore)
}

export const rootStore = new RootStore();
