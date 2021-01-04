import nock from 'nock'

export const getMockHttpServer = () => nock('http://localhost:3016')
