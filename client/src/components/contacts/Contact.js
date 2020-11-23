import React, { Fragment, useContext, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import EntryContainer from '../../utility/EntryContainer';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../../components/layout/Spinner';
import ContactItem from './ContactItem';

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, loading, getContacts } = contactContext;

  useEffect(() => {
    getContacts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <EntryContainer key={contact._id} classNames='item'>
                  <ContactItem contact={contact} />
                </EntryContainer>
              ))
            : contacts.map((contact) => (
                <EntryContainer key={contact._id} classNames='item'>
                  <ContactItem contact={contact} />
                </EntryContainer>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contact;
