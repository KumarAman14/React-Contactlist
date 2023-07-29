import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
	const contacts = useSelector((state) => state);

	const dispatch = useDispatch();

	const deleteContact = (id) => {
		dispatch({ type: "DELETE_CONTACT", payload: id });
		toast.success("Contact deleted successfully!");
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10 mx-auto my-5">
					<table className="table table-hover">
						<thead className="text-center">
							<tr>
								<th scope="col" className="text-white bg-dark">
									#
								</th>
								<th scope="col" className="text-white bg-dark">
									Name
								</th>
								<th scope="col" className="text-white bg-dark">
									Email
								</th>
								<th scope="col" className="text-white bg-dark">
									Number
								</th>
								<th scope="col" className="text-white bg-dark">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{contacts.map((contact, id) => (
								<tr key={id}>
									<td>{id + 1}</td>
									<td>{contact.name}</td>
									<td>{contact.email}</td>
									<td>{contact.number}</td>
									<td>
										<Link
											to={`/edit/${contact.id}`}
											className="btn btn-small btn-primary me-2"
										>
											Edit
										</Link>
										<button
											type="button"
											onClick={() => deleteContact(contact.id)}
											className="btn btn-small btn-danger"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
