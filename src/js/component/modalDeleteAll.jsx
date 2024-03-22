import React, {useContext} from "react";
import PropTypes from "prop-types"; 
import { Context } from "../store/appContext.js";

export const ModalDeleteAll = (props) => {
    const {actions} = useContext(Context);
	return (
		<div class="modal fade" id="modalDeleteAll" aria-labelledby="exampleModalLabel" tabindex="-1" aria-hidden="true">
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
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => actions.deleteAllContacts(props.agenda)}>
                                Yes baby!
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
};

ModalDeleteAll.propTypes = {
	agenda: PropTypes.string,
	
};