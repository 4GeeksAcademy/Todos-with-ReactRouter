import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Form = (props) => {
	const { actions } = useContext(Context);
	const [fullName, setFullName] = useState(props.full_name);
	const [email, setEmail] = useState(props.email);
	const [phone, setPhone] = useState(props.phone);
	const [address, setAddress] = useState(props.address);

    const onForm = (data) => {
        if (props.id === undefined) {
            actions.createOneContact(data);
        } else {
            actions.updateOneContact({
				id: props.id,
				full_name: data.full_name,
				email: data.email,
				agenda_slug: data.agenda_slug,
				address: data.address,
				phone: data.phone
			});
        }
    }

	return (
			<form id="form">
				<h1 className="text-center">Add a new contact</h1>
				<div className="mb-3">
					<label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="exampleInputFullName" placeholder="Full Name"
						onChange={(e) => setFullName(e.target.value)}
						value={fullName}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPhone" className="form-label">Phone</label>
					<input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter phone"
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputAddress" className="form-label">Address</label>
					<input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter address"
						onChange={(e) => setAddress(e.target.value)}
						value={address}
					/>
				</div>
				<button type="submit" className="btn btn-primary w-100" onClick={() => onForm({
					full_name: fullName,
					email: email,
					agenda_slug: props.agenda_slug,
					address: address,
					phone: phone
				})}>save</button>
			</form>
	);
};