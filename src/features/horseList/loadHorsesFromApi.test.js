import {
  loadHorsesFromApi,
  selectHorses,
  loadHorsesError,
  loadHorses,
  selectIsLoading,
  selectError,
} from './horseListSlice'
import { setUpStore } from '../../app/store'
import { getMockHttpServer } from '../../../testHelpers/mockServer'

const createHorses = (num) => Array.from(Array(num), (_, i) => ({ name: `horse_${i}`, id: i }))

describe('test loadHorsesFromApi', () => {
  let server 
  beforeEach(() => {
    server = getMockHttpServer()
  })
  it('should load horses from api and load them into state', async () => {
    const horses = createHorses(1)
    server.get("/horse")
      .reply(200, horses)
    const store = setUpStore()
    await store.dispatch(loadHorsesFromApi()) 
    const state = store.getState()
    expect(selectHorses(state)).toEqual([{ name: 'horse_0', id: 0 }])
  })
  it('should set reset loading and error state', async () => {
    const horses = createHorses(1)
    server.get("/horse")
      .reply(200, horses)
    const store = setUpStore()
    store.dispatch(loadHorses())
    store.dispatch(loadHorsesError('my error'))
    await store.dispatch(loadHorsesFromApi()) 
    const state = store.getState()
    expect(selectIsLoading(state)).toEqual(false)
    expect(selectError(state)).toEqual('')
  })
})
