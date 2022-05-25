import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from '../../../../hooks/use-store';

export const Todos = observer(function Todos() {
  const { todosStore } = useStore();

  useEffect(() => {
    todosStore.getTodos();
  }, []);

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todosStore.userTodos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
});
