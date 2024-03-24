const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			getAllContacts: () => {
					fetch('https://playground.4geeks.com/apis/fake/contact/agenda/ines') 
					.then((response) => response.json())
					.then((data) => setStore({ contacts: data }))
					.catch((error) => console.log(error))
			},
			createOneContact: (newContact) => {
				fetch('https://playground.4geeks.com/apis/fake/contact' , {
					method:'POST',
					body: JSON.stringify({
						full_name: newContact.full_name,
						email: newContact.email,
						agenda_slug: newContact.agenda_slug,
						address: newContact.address,
						phone: newContact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.log(error))
			},
			deleteOneContact: (contact_id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}` , {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => {
					setStore({
						contacts: getStore().contacts.filter((contact) => contact.id !== contact_id)
					});
				})
				.catch((error) => console.log(error))
			},
			deleteAllContacts: (agenda_slug) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agenda_slug}` , {
					method:'DELETE',
					headers:{
						"Content-Type": "application/json"
						}
				})
				.then((data) => setStore({ contacts: [] }))
				.catch((error) => console.log(error))
			},
			updateOneContact: (contact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}` , {
					method:'PUT',
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.email,
						agenda_slug: contact.agenda_slug,
						address: contact.address,
						phone: contact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => {
					console.log("Sucess");
					return response.json();
				})
				.then((data) => {
					console.log("Error");
					return console.log(data);})
				.catch((error) => console.log(error))
			},	
		}
	};
};

export default getState;
