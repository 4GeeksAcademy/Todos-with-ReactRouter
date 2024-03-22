import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	return (
		<nav className="navbar me-4">
			<Link to="/">
			</Link>
			{location.pathname === "/" ? 
			(<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>) : null}
		</nav>
	);
};
