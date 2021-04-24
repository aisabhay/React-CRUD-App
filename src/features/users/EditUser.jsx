import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [fname, setFname] = useState(user.first_name);
  const [lname, setLname] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (fname && email && lname) {
      dispatch(
        userUpdated({
          id: userId,
          first_name: fname,
          last_name: lname,
          email
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label>First Name</label>
          <input type="text" onChange={handleFname} value={fname} />
          <label>Last Name</label>
          <input type="text" onChange={handleLname} value={lname} />
          <label>Email</label>
          <input type="email" onChange={handleEmail} value={email} />
          <p>{error && error}</p>
          <button onClick={handleClick}>Save user</button>
        </div>
      </div>
    </div>
  );
}
