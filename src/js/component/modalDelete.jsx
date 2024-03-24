import React, {useContext} from "react";
import { Context } from "../store/appContext.js";

export const ModalDelete = (props) => {
    const {actions} = useContext(Context);

    const onDeleteClick = () => {
        if (props.contactId === undefined) {
            actions.deleteAllContacts(props.agenda)
        } else {
            actions.deleteOneContact(props.contactId)
        }
    }
   
	return (
		<div className="modal fade" id={props.modalId} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onDeleteClick}>
                                Yes baby!
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
};

/* actions.deleteOneContact(props.contactId) */
