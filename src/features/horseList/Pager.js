import { Link } from 'react-router-dom'
import styles from './Pager.module.css'

export const Pager = ({ numPages }) => {
  if(numPages <= 0) {
    return null
  }
  return (
    <div className={styles.pager}>
      {Array.from(Array(numPages), (_, i) => (<Link className={styles.button} key={i} to={`/horses/page/${i+1}`}>{i+1}</Link>))}
    </div>
  )
}
