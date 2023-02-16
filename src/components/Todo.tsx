import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { Itodo } from '../interfaces/globals';
import Icon from '@mui/material/Icon';

type Props = {
  todoInformation: Itodo;
  themeIsLight: boolean;
};

const Todo = ({ todoInformation, themeIsLight }: Props) => {
  const { completed, id, todo, userId } = todoInformation;
  const [inputCheck, setInputCheck] = useState(completed);
  const handleCheck = () => {
    console.log('Yapıldı/Yapılmadı', id);
    setInputCheck((old) => !old);
    //Backend'e id gönderilecek
  };
  const handleDelete = () => {
    console.log('Silinecek', id);
  };
  return (
    <div className="flex items-center ">
      <div className="flex-1 cursor-pointer py-1" onClick={handleCheck}>
        <span
          className={`${inputCheck ? 'line-through' : 'no-underline'}  ${
            themeIsLight
              ? 'text-light-text decoration-light-text'
              : 'text-dark-text decoration-dark-text'
          }  `}>
          {todo}
        </span>
      </div>
      <span className="flex items-center ml-auto">
        <Checkbox
          checked={inputCheck}
          onChange={handleCheck}
          icon={
            <Icon
              className={`${
                themeIsLight ? 'text-light-text' : 'text-dark-text'
              }`}>
              assignment
            </Icon>
          }
          checkedIcon={
            <Icon
              className={`${
                themeIsLight ? 'text-green-600/75' : 'text-green-600'
              } `}>
              assignment_turned_in
            </Icon>
          }
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Icon onClick={handleDelete} className="text-red-600/75 cursor-pointer">
          delete
        </Icon>
      </span>
    </div>
  );
};

export default Todo;
