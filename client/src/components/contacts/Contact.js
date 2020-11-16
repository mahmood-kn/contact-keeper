import React, { Fragment, useContext } from 'react';
import { TransitionGroup } from 'react-transition-group';
import EntryContainer from '../../utility/EntryContainer';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <EntryContainer key={contact.id} classNames='item'>
                <ContactItem contact={contact} />
              </EntryContainer>
            ))
          : contacts.map((contact) => (
              <EntryContainer key={contact.id} classNames='item'>
                <ContactItem contact={contact} />
              </EntryContainer>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contact;
