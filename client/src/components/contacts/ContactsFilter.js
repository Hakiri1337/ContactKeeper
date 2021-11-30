import React, { useContext, useRef, useEffect } from "react";
import CotnactContext from "../../context/contact/contactContext";
const ContactsFilter = () => {
  const contactContext = useContext(CotnactContext);
  const text = useRef("");
  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactsFilter;
