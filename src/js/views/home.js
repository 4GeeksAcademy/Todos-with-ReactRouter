import React, {useContext, useEffect} from "react";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js";
import { ModalDelete } from "../component/modalDelete.jsx";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
	
	useEffect (() => {
		actions.getAllContacts();
	}, []);
	
	return (
		<>
			<div className="cartas rounded-1 mx-4 border-bottom">
				{store.contacts.map((contact) => {
					return (
							<Card
								key={contact.id}
								id={contact.id}
								image={"https://picsum.photos/id/177/125/125"}
								fullName={contact.full_name}
								address={contact.address}
								phone={contact.phone}
								email={contact.email}
							/>
					);
				})}
			</div>
			<div className="col-2 mx-auto">
				<button className="btn btn-danger my-2 text-center" data-bs-toggle="modal" data-bs-target="#modalDeleteAll">  Delete All Contacts</button>
			</div>
			<ModalDelete agenda={"ines"} modalId={"modalDeleteAll"} />
		</>
	);
};

