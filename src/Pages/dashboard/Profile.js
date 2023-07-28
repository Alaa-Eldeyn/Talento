import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../Component";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UpdateUser } from "../../features/user/UserSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(UpdateUser({ name, email, lastName, location }));
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="Last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" disabled={isLoading} className="btn btn-block">
            {isLoading ? "Please wait..." : "Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
