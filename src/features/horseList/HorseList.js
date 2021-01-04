import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadHorsesFromApi, selectHorses, selectIsLoading } from './counterSlice'
import { Loading } from './Loading'
import { HorseMenuItem } from './HorseMenuItem'

export function HorseList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadHorsesFromApi())
  }, [ dispatch ])
  const horses = useSelector(selectHorses)
  const isLoading = useSelector(selectIsLoading)
  return (
    <div>
      {
        isLoading
          ? <Loading/>
          : horses.map(horse => <HorseMenuItem horse={horse} id={horse.id} />)
      }
    </div>
  );
}
