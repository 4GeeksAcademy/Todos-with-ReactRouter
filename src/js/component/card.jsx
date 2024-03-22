import React from "react";
import PropTypes from "prop-types"; 
import {ModalDelete} from "../component/modalDelete.jsx";

export const Card = (props) => {
	return (
		<>
			<div className="p-3 border-bottom d-flex justify-content-between mx-4">
				<div className="d-flex">
					<img src={props.image} className="img me-5"/>
					<div className="card-body p-0">
						<h5 className="card-text">{props.fullName}</h5>
						<p className="card-text text-secondary mb-1"><i className="fas fa-map-marker-alt">{props.address}</i></p>
						<p className="card-text text-secondary mb-1"><i className="fas fa-phone">{props.phone}</i></p>
						<p className="card-text text-secondary"><i className="fas fa-envelope">{props.email}</i></p>
					</div>
				</div>
				<div>
					<span><i className="fas fa-pen m-3"/></span>
					<span><i className="fas fa-trash" data-bs-toggle="modal" data-bs-target="#modalDelete" /></span>
				</div>
			</div>
			<ModalDelete contactId={props.id}/>
		</>
	);
};

Card.propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
    fullName: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
};

 