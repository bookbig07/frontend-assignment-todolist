"use client"

import { useState } from 'react';

type typeList = {
  type: string;
  name: string;
};

const valueList = [
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

type itemList = {
  items: typeList[];
  fruitList: typeList[];
  vegetableList: typeList[];
};

const initItem : itemList = {
  items: valueList,
  fruitList: [],
  vegetableList: [],
}

export default function Todolist() {
  const [state, setState] = useState(initItem);

  const handleItemCooldown = (clickedItem: typeList) => {
    setTimeout(() => {
      setState(prevState => {
        let updatedState = { ...prevState };
        let updatedItemList: typeList[];
  
        if (clickedItem.type === 'Fruit') {
          updatedItemList = prevState.fruitList.filter(item => item.name !== clickedItem.name);
          if (!prevState.items.includes(clickedItem)) {
            updatedState = {
              ...updatedState,
              fruitList: updatedItemList,
              items: [...prevState.items, clickedItem],
            };
          }
        } else if (clickedItem.type === 'Vegetable') {
          updatedItemList = prevState.vegetableList.filter(item => item.name !== clickedItem.name);
          if (!prevState.items.includes(clickedItem)) {
            updatedState = {
              ...updatedState,
              vegetableList: updatedItemList,
              items: [...prevState.items, clickedItem],
            };
          }
        }
        return updatedState;
      });
    }, 5000);
  };
  

  const handleItemClick = (index: number) => {
    const clickedItem = state.items[index];
    if (!clickedItem) {
      return;
    }
    let updatedState = { ...state };
    if (clickedItem.type === 'Vegetable') {
      updatedState = {
        ...updatedState,
        vegetableList: [...updatedState.vegetableList, clickedItem],
      };
    } else if (clickedItem.type === 'Fruit') {
      updatedState = {
        ...updatedState,
        fruitList: [...updatedState.fruitList, clickedItem],
      };
    }
    setState(prevState => ({
      ...prevState,
      ...updatedState,
      items: prevState.items.filter((item, idx) => idx !== index),
    }));
    handleItemCooldown(clickedItem)
  };

  const handleBack = (type: 'Fruit' | 'Vegetable', index: number) => {
    let clickedItem;
    if (type === 'Fruit') {
      clickedItem = state.fruitList[index];
    } else if (type === 'Vegetable') {
      clickedItem = state.vegetableList[index];
    }
  
    if (!clickedItem) {
      return;
    }
  
    setState(prevState => ({
      ...prevState,
      [`${type.toLowerCase()}List` as keyof itemList]: prevState[`${type.toLowerCase()}List` as keyof itemList].filter((item, idx) => idx !== index),
      items: [...prevState.items, clickedItem],
    }));
  };

  return (
    <>
      <div className='flex flex-row gap-6'>
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96 h-[40rem] overflow-auto">
          <div className="flex items-center justify-center mb-4 bg-[#E2E6F6] p-4 rounded-lg">
            <h4 className="font-bold text-lg text-[#016BA1]">Todo List</h4>
          </div>
          {state.items.map((item,index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className="flex items-center justify-center h-10 px-3 rounded cursor-pointer hover:scale-110 hover:bg-gray-100 transition-opacity duration-300 ease-in-out"
            >
              <span className='font-medium text-[#016BA1]'>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96 h-[40rem] overflow-auto">
          <div className="flex items-center justify-center mb-4 bg-[#E2E6F6] p-4 rounded-lg">
            <h4 className="font-bold text-lg text-[#016BA1]">Fruit</h4>
          </div>
          {state.fruitList.map((item,index) => (
            <div
              key={index}
              onClick={() => handleBack('Fruit',index)}
              className="flex items-center justify-center h-10 px-3 rounded cursor-pointer hover:scale-110 hover:bg-gray-100 transition-opacity duration-300 ease-in-out"
            >
              <span className='font-medium text-[#016BA1]'>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96 h-[40rem] overflow-auto">
          <div className="flex items-center justify-center mb-4 bg-[#E2E6F6] p-4 rounded-lg">
            <h4 className="font-bold text-lg text-[#016BA1]">Vegetable</h4>
          </div>
          {state.vegetableList.map((item,index) => (
            <div
              key={index}
              onClick={() => handleBack('Vegetable',index)}
              className="flex items-center justify-center h-10 px-3 rounded cursor-pointer hover:scale-110 hover:bg-gray-100 transition-opacity duration-300 ease-in-out"
            >
              <span className='font-medium text-[#016BA1]'>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
