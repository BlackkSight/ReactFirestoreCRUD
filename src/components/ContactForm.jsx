import { Form } from 'semantic-ui-react'

const ContactForm = (props) => {
    return(
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input onChange={(e)=>{props.setClientData({ 
          firstname: e.target.value,
          lastname: props.clientData.lastname,
          email: props.clientData.email,
          phone: props.clientData.phone,
     })}} value={props.clientData.firstname} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input onChange={(e)=>{props.setClientData({ 
          firstname: props.clientData.firstname,
          lastname: e.target.value,
          email: props.clientData.email,
          phone: props.clientData.phone,
     })}} value={props.clientData.lastname} placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input onChange={(e)=>{props.setClientData({ 
          firstname: props.clientData.firstname,
          lastname: props.clientData.lastname,
          email: e.target.value,
          phone: props.clientData.phone,
     })}} value={props.clientData.email} placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Phone number</label>
      <input onChange={(e)=>{props.setClientData({ 
          firstname: props.clientData.firstname,
          lastname: props.clientData.lastname,
          email: props.clientData.email,
          phone: e.target.value,
     })}} value={props.clientData.phone} placeholder='Last Name' />
    </Form.Field>
  </Form>
    )
}

export default ContactForm;