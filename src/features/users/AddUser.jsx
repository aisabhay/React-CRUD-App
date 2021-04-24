import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (fname && email && lname) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          first_name: fname,
          last_name: lname,
          email,
          avatar:
            "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setFname("");
    setLname("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <label>First Name</label>
        <input type="text" onChange={handleFname} value={fname} />
        <label>Last Name</label>
        <input type="text" onChange={handleLname} value={lname} />
        <label>Email</label>
        <input type="email" onChange={handleEmail} value={email} />
        <p>{error && error}</p>
        <button onClick={handleClick}>Add user</button>
      </div>
    </div>
  );
}
