"use client"

import { useState, useEffect } from 'react';

type typeList = {
  type: string;
  name: string;
};

const valueList: typeList[] = [
  {
    type: 'Fruit',
    name: 'Apple',
  },
  {
      type: 'Vegetable',
      name: 'Broccoli',
  },
  {
      type: 'Vegetable',
      name: 'Mushroom',
  },
  {
      type: 'Fruit',
      name: 'Banana',
  },
  {
      type: 'Vegetable',
      name: 'Tomato',
  },
  {
      type: 'Fruit',
      name: 'Orange',
  },
  {
      type: 'Fruit',
      name: 'Mango',
  },
  {
      type: 'Fruit',
      name: 'Pineapple',
  },
  {
      type: 'Vegetable',
      name: 'Cucumber',
  },
  {
      type: 'Fruit',
      name: 'Watermelon',
  },
  {
      type: 'Vegetable',
      name: 'Carrot',
  },
];

const itemList = {
  items: valueList,
  fruitList: [],
  vegetableList: [],
};

export default function Todolist() {
  const [state, setState] = useState(itemList);

  return (
    <div>todolist</div>
  )
}
