import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadHorsesFromApi, selectHorsesForPage, selectIsLoading, selectNumPages } from './counterSlice'
import { Loading } from './Loading'
import { HorseMenuItem } from './HorseMenuItem'
import { Pager } from './Pager'
import { useParams, useHistory } from 'react-router'

export function HorseList() {
  const dispatch = useDispatch()
  const { pageNum } = useParams()
  const history = useHistory()
  const horses = useSelector(selectHorsesForPage(pageNum))
  const isLoading = useSelector(selectIsLoading)
  const numOfPages = useSelector(selectNumPages)

  useEffect(() => {
    dispatch(loadHorsesFromApi())
  }, [ dispatch ])

  useEffect(() => {
    if(pageNum === 1 || pageNum <= numOfPages || isLoading)  { return }
    history.replace('/horses/page/1')
  }, [ pageNum, numOfPages, isLoading, history ])

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
