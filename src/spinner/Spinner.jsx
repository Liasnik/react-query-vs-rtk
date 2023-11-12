import { CircularProgress } from '@mui/material'
import s from './spinner.module.scss'

const Spinner = () => {
  return (
    <div className={s.spinner}>
        <CircularProgress style={{color: 'blueviolet'}} size={100}/>
    </div>
  )
}

export default Spinner