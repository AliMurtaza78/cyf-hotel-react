import { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [profileInfo, setProfileInfo] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setProfileInfo(data));
  }, [id]);
  return (
    profileInfo != null && (
      <div>
        <p>Customer Profile id is {id}</p>
        <ul>
          <li>{`Customer ID: ${profileInfo.id}`}</li>
          <li>{`First Name: ${profileInfo.firstName}`}</li>
          <li>{`Email: ${profileInfo.email}`}</li>
        </ul>
      </div>
    )
  );
};

export default CustomerProfile;
