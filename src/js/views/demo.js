import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../component/form.jsx";

export const Demo = () => {
	return (
		<div className="container">
			<Form agenda_slug={"ines"} />
			<Link to="/">
					<p>or get back to contacts</p>
			</Link>
		</div>
	)
};



