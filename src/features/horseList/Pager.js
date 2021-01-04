import { Link } from 'react-router-dom'

export const Pager = ({ numPages }) => {
  if(numPages <= 0) {
    return null
  }
  return (
    <div>
      {Array.from(Array(numPages), (_, i) => (<Link key={i} to={`/horses/page/${i+1}`}>{i+1}</Link>))}
    </div>
  )
}
