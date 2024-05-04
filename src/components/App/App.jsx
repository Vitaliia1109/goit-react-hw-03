import { useEffect, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import './App.css'

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {

  const [contacts, setContacts] = useState(initialContacts)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts))
    }
  }, [])

  const saveContactsToLocalStorage = (updatedContacts) => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
  }

  useEffect(() => {
    saveContactsToLocalStorage(contacts)
  }, [contacts])

  const addContact = (newContact) => { 
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact]
      return updatedContacts
    })
  }
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter((contact) => contact.id!== contactId)
      return updatedContacts
    })
  }

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={ deleteContact} />
    </div>   
  )
}

export default App
