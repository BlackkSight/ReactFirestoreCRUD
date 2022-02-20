import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import deleteContact from '../helpers/deleteContact';

const Delete = (props) => {

    const [ open, setOpen ] = useState(false);

    return(
        <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button icon="delete" ></Button>}
    >
      <Header icon>
        <Icon name='delete' />
        Delete contact
      </Header>
      <Modal.Content>
        <p className="modalDeleteText">
          Are you sure that you want to delete this contact?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => { deleteContact(axios, props.id, props.setContacts); setOpen(false)}}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    )
}

export default Delete;