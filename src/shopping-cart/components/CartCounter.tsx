
'use client';

import { useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counter-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props{
  value? : number;
}

export const CartCounter = ({value = 0}: Props) => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <>
    <span className="text-9xl">{count}</span>
      <div className="flex">
        
      <button
          onClick={() => dispatch(substractOne())}
         className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>

        <button 
         onClick={() => dispatch(addOne())}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
      </div>
    </>
  )
}
