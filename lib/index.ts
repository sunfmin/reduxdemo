import { combineReducers, AnyAction, Reducer } from "redux";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type MyState = Todo[];

const todos: Reducer<MyState> = (
  state: MyState = [],
  action: AnyAction
): MyState => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });
  }

  return state;
};

export { todos };
