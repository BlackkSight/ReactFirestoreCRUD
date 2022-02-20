import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import ContactForm from './ContactForm';
import createContact from '../helpers/createContact';
import axios from 'axios';

const Create = (props) => {

    const [ open, setOpen ] = useState(false);
    
    const [ clientData, setClientData ] = useState({ 
        firstname: "", 
        lastname: "", 
        email: "",
        phone: ""
    });

    return(
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="black">New contact</Button>}
     className="editModal" >
      <Modal.Header><Icon size="large" name="user circle"/>New contact</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <ContactForm clientData={clientData} setClientData={setClientData}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Create"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {createContact(axios, clientData, props.setContacts); setOpen(false)}}
          positive
        />
      </Modal.Actions>
    </Modal>
    )
}

export default Create;