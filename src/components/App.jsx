import '../styles/App.css';
import { Header, Icon, Card, Button } from 'semantic-ui-react';
import ContactCard from './ContactCard';
import { useState, useEffect } from 'react';
import getContacts from '../helpers/getContacts';
import axios from 'axios';
import Create from './Create';

function App() {

  const [ contacts, setContacts ] = useState([]);

  useEffect(()=>{
    getContacts(axios, setContacts)
  }, [])

  return (
    <div className="App">
      <Header as='h1' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>Contacts</Header.Content>
      </Header>
      <Card className="MainCard">
        <Create setContacts={setContacts}/>
        <div className="contactlist">
          {
            contacts.map((contact)=>{
              return(
                <ContactCard contacts={contacts} setContacts={setContacts} firstname={contact.firstname} lastname={contact.lastname} email={contact.email} phone={contact.phone} id={contact.id}/>
              )
            })
          }
        </div>
      </Card>
    </div>
  );
}

export default App;
