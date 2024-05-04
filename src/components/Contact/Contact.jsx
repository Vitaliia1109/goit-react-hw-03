import css from './Contact.module.css'
import { HiUser, HiPhone } from "react-icons/hi"

export default function Contact({ contact: { name, number, id }, onDelete }) {
    
    return (
      <div className={css.contact}>
        <div className={css.textWrapper}>
          <p className={css.name}><HiUser /> {name}</p>
          <p className={css.number}><HiPhone /> {number}</p>
        </div>
        <button className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
  </div>
    )
}