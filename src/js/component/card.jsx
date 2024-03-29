import React from "react";
import PropTypes from "prop-types"; 
import {ModalDelete} from "../component/modalDelete.jsx";
import { Link } from "react-router-dom";

export const Card = (props) => {
	return (
		<>
			<div className="p-3 border-bottom d-flex justify-content-between mx-4">
				<div className="d-flex">
					<img src={props.image} className="img me-5 d-none d-md-block" alt="img"/>
					<div className="card-body p-0">
						<h5 className="card-text">{props.fullName}</h5>
						<p className="card-text text-secondary mb-1"><i className="fas fa-map-marker-alt">{props.address}</i></p>
						<p className="card-text text-secondary mb-1"><i className="fas fa-phone">{props.phone}</i></p>
						<p className="card-text text-secondary"><i className="fas fa-envelope">{props.email}</i></p>
					</div>
				</div>
				<div className="d-flex align-items-center flex-column d-lg-block">
					<Link to={`/update/${props.id}`}>
						<span><i className="fas fa-pen m-3 text-dark "/></span>
					</Link>
					<span><i className="fas fa-trash" data-bs-toggle="modal" data-bs-target={`#modal-${props.id}`} /></span>
				</div>
			</div>
			{<ModalDelete contactId={props.id} modalId={`modal-${props.id}`} />}
		</>
	);
};

Card.propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
    fullName: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
};

 