import deleteContact from './deleteContact';
import getContacts from './getContacts';

const editContact = async (axios, clientData, id, setContacts) => {
    console.log("axiosing: ", process.env.REACT_APP_API + "update-contact/" + id)
    console.log("Client data: " + JSON.stringify(clientData))
    await axios.post(process.env.REACT_APP_API + "update-contact/" + id, clientData)
    .then( data => {
        console.log(data)
    });
    //await deleteContact(axios, id);
    await getContacts(axios, setContacts);
}

export default editContact;