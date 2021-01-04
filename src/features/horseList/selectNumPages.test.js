import { selectNumPages } from './counterSlice'
describe('selectNumPages', () => {
  it('should return the number of pages rounded up', () => {
    const state = { horseList: { horses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] } }
    expect(selectNumPages(state)).toEqual(2)
  })
})
