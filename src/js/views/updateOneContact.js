import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form } from "../component/form.jsx";
import { Context } from "../store/appContext.js";

export const UpdateOneContact = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const contact = store.contacts.find((elem) => elem.id == id );
	useEffect (() => {
		actions.getAllContacts();
	}, []);

	if (contact === undefined) return <h1>Loading...</h1>

	return (
		<div className="container">
			<Form 
				id={id}
				agenda_slug={contact?.agenda_slug}
				full_name={contact?.full_name}
				email={contact?.email}
				phone={contact?.phone}
				address={contact?.address}
			/>
			<Link to="/">
				<p>or get back to contacts</p>
			</Link>
		</div>
	)
};