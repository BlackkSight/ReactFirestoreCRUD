import getContacts from './getContacts';

const deleteContact = async (axios, id, setContacts) => {
    console.log("axiosing: ", process.env.REACT_APP_API + "delete-contact/" + id)
    await axios.get(process.env.REACT_APP_API + "delete-contact/" + id)
    .then( data => {
        console.log(data)
    });
    await getContacts(axios, setContacts);
}

export default deleteContact;