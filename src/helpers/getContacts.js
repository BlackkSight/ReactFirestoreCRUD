const getContacts = async (fetch, setContacts) => {
    console.log("Fetching: ", process.env.REACT_APP_API)
    await fetch.get(process.env.REACT_APP_API)
    .then( data => {
        setContacts(data.data)
    })
}

export default getContacts;