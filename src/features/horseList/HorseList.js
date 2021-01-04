import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadHorsesFromApi, selectHorsesForPage, selectIsLoading, selectNumPages } from './counterSlice'
import { Loading } from './Loading'
import { HorseMenuItem } from './HorseMenuItem'
import { Pager } from './Pager'
import { useParams } from 'react-router'

export function HorseList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadHorsesFromApi())
  }, [ dispatch ])
  const { pageNum } = useParams()
  const horses = useSelector(selectHorsesForPage(pageNum))
  const isLoading = useSelector(selectIsLoading)
  const numOfPages = useSelector(selectNumPages)
  return (
    <div>
      {
        isLoading
          ? <Loading/>
          : horses.map(horse => <HorseMenuItem horse={horse} key={horse.id} />)
      }
      <Pager numPages={numOfPages}/>
    </div>
  );
}
