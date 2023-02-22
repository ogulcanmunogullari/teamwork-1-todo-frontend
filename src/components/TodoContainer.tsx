import Todo from '../components/Todo';
import TodoInput from './TodoInput';
import { Itodo } from '../interfaces/globals';

type Props = {
  todosData: Itodo[];
  themeIsLight: boolean;
};

export const TodoContainer = ({ todosData, themeIsLight }: Props) => {
  return (
    <div
      className={`${
        themeIsLight
          ? 'bg-light-background border-light-border sm:shadow-lg sm:shadow-light-border'
          : 'bg-dark-background border-dark-border sm:shadow-lg sm:shadow-dark-background'
      } max-w-[640px] p-3 sm:p-5 mx-auto border overflow-hidden`}>
      <TodoInput themeIsLight={themeIsLight} />
      {todosData.map((todo) => {
        return (
          <div
            key={todo.id}
            className={`${
              themeIsLight
                ? 'bg-light-input-background border-light-border '
                : 'bg-dark-input-background border-dark-border'
            } px-1 mt-2 border`}>
            <Todo todoInformation={todo} themeIsLight={themeIsLight} />
          </div>
        );
      })}
    </div>
  );
};
