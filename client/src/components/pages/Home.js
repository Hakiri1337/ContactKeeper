import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactsFilter from "../contacts/ContactsFilter";
import ContactsForm from "../contacts/ContactsForm";
import AuthContext from "../../context/auth/authContext";
export const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <ContactsForm />
      </div>
      <div>
        <ContactsFilter />
        <Contacts />
      </div>
    </div>
  );
};
export default Home;
