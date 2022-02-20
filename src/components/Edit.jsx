import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';
import editContact from '../helpers/editContact';

const Edit = (props) => {

    const [ open, setOpen ] = useState(false);
    const [ clientData, setClientData ] = useState({ 
        firstname: props.firstname, 
        lastname: props.lastname, 
        email: props.email,
        phone: props.phone
    });

    return(
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon="edit"></Button>}
     className="editModal" >
      <Modal.Header><Icon size="large" name="edit"/>Edit contact</Modal.Header>
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
          content="Update"
          labelPosition='right'
          icon='checkmark'
          onClick={() => { editContact(axios, clientData, props.id, props.setContacts); setOpen(false)}}
          positive
        />
      </Modal.Actions>
    </Modal>
    )
}

export default Edit;