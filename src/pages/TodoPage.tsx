import { useLoaderData } from 'react-router-dom';
import { TodoContainer } from '../components/TodoContainer';

import { useSelector } from 'react-redux';
import { Itodo, Iurl } from '../interfaces/globals';
import { RootState } from '../redux/store';
type Props = {};

export const TodoPage = ({}: Props) => {
  const themeIsLight = useSelector((state: RootState) => state.theme.isLight);
  const urlData = useLoaderData() as Iurl;
  const todosData: Itodo[] = urlData.todos;
  return (
    <div
      className={`${
        themeIsLight ? 'bg-light-input-background' : 'bg-dark-input-background'
      }
      py-10`}>
      <TodoContainer themeIsLight={themeIsLight} todosData={todosData} />
    </div>
  );
};
export const todoLoader = async () => {
  const res = await fetch('https://dummyjson.com/todos');
  const data: Iurl = await res.json();
  return data;
};

