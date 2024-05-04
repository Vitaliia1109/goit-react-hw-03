import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { nanoid } from 'nanoid'
import { useId } from 'react'
import css from './ContactForm.module.css'

const AddContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(30, 'Too long!').required('Required!'),
  number: Yup.string().min(3, 'Too short!').max(30, 'Too long!').required('Required!'),
})

export default function ContactForm({ onAdd }) {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number
        })
        actions.resetForm()
     
    }
    const nameId = useId()
    const numberId = useId()

    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} validationSchema={AddContactSchema}>
            <Form className={css.form}>
                <label className={css.label} htmlFor="nameId">Name</label>
                <Field className={css.input} type="text" name="name" id={nameId} />
                <ErrorMessage className={css.error} name="name" component="span" />
                <label className={css.label} htmlFor="numberId">Number</label>
                <Field className={css.input} type="tel" name="number" id={numberId} />
                <ErrorMessage className={css.error} name="number" component="span" />
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
        
        
        
        // <form onSubmit={handleSubmit}>
        //     {/* <label htmlFor="">Name</label> */}
        //     <input type="text" name="name" />
        //     {/* <label htmlFor="">Number</label> */}
        //     <input type="tel" name="number" />
        //     <button type="submit">Add contact</button>
        // </form>
            
        
    )
}