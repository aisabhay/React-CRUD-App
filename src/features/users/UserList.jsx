import { userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);

  const handleDelete = (id) => {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      dispatch(userDeleted({ id }));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>My Customers</h1>
      </div>
      <div className="row">
        <Link to="/add-user">
          <button className="button-primary">Add user</button>
        </Link>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entities.length &&
              entities.map(
                ({ id, first_name, last_name, email, avatar }, i) => (
                  <tr key={i}>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                    <td>
                      <img key={avatar} src={avatar} width="50" alt="avatar" />
                    </td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
