import { Card, Button } from 'semantic-ui-react';
import Edit from './Edit';
import Delete from './Delete';

const ContactCard = (props) =>{
    return(
        <Card className="contactCard">
            <div className="contactContent">
              <Card.Header className="contactCardHeader" >{props.firstname} {props.lastname}</Card.Header>
              <Card.Meta>
                <p className="contactEmail">{props.email}</p>
              </Card.Meta>
              <Card.Meta>
                <p className="contactPhone">{props.phone}</p>
              </Card.Meta>
            </div>
            <div className="contactButtons">
              <Button.Group className="buttonGroup" attached="right" basic size='small'>
                <Edit firstname={props.firstname} lastname={props.lastname} email={props.email} phone={props.phone} id={props.id} setContacts={props.setContacts}/>
                <Delete setContacts={props.setContacts} id={props.id}/>
              </Button.Group>
            </div>
        </Card>
    )
}

export default ContactCard;