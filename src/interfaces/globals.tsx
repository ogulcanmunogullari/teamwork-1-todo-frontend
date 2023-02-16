export interface Itodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface Iurl {
  limit: number;
  skip: number;
  todos: Itodo[];
  total: number;
}

export interface Itheme {
  isLight: boolean;
}
