
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
export const Header = () => { 
  const getActivClass = ({ isActive }: { isActive: boolean}): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link
  }
  return (
    <header className={classes.header}>
      <div className={classes.container}>
       <NavLink 
       to="/" 
       className={getActivClass}>Home</NavLink>
       <NavLink 
       to="/todo" 
       className={getActivClass}>ToDo</NavLink>
       
      </div>
    </header>
  )
}