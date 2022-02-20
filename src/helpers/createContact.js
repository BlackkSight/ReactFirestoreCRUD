import getContacts from '../helpers/getContacts';

const createContact = async (axios, clientData, setContacts) => {
    console.log("axiosing: ", process.env.REACT_APP_API + "new-contact")
    console.log("Client data: " + JSON.stringify(clientData))
    await axios.post(process.env.REACT_APP_API + "new-contact", clientData)
    .then( data => {
        console.log(data)
    });
    await getContacts(axios, setContacts);
}

export default createContact;