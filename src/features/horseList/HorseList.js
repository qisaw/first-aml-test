import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadHorsesFromApi, selectHorses, selectIsLoading } from './counterSlice'

export function HorseList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadHorsesFromApi())
  }, [ dispatch ])
  const horses = useSelector(selectHorses)
  const isLoading = useSelector(selectIsLoading)
  return (
    <div>
      { isLoading? <div> loading...</div>: horses.map(({ name }) => <div>{ name }</div>) }
    </div>
  );
}
