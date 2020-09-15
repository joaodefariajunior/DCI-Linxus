import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Contact() {

  const [matchingUsers, setMatchingUsers] = useState([{ refs: [], _id: 0, name: "", email: "" }]);

  const myUsers = useSelector(state => {
    return state.user.matchingUsers
  });

  useEffect(() => {
    setMatchingUsers(myUsers)
  }, [myUsers])

  return (
    <div>
      <h3>Contact us</h3>
      {matchingUsers.map(user => <p key={user.id}>{user.name}</p>)}
      <form></form>
    </div>
  );
}

export default Contact;