import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	return (
		<div className="container">
			<form>
				<h1 className="text-center">Add a new contact</h1>
				<div className="mb-3">
					<label for="exampleInputFullName" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="exampleInputFullName" placeholder="Full Name"
						onChange={(e) => setFullName(e.target.value)}
						value={fullName}
					/>
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPhone" className="form-label">Phone</label>
					<input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter phone"
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>
				</div>
				<div className="mb-3">
					<label for="exampleInputAddress" className="form-label">Address</label>
					<input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter address"
						onChange={(e) => setAddress(e.target.value)}
						value={address}
					/>
				</div>
				<button type="submit" className="btn btn-primary w-100" onClick={() => actions.createOneContact({
						full_name: fullName,
						email: email,
						agenda_slug: "ines",
						address: address,
						phone: phone
				})}>save</button>
			</form>
			<Link to="/">
				<p>or get back to contacts</p>
			</Link>
		</div>
	);
};
