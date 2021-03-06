import React, { useState } from "react";
import MailchimpForm from './components/mailchimpForm';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import "./signupForm.scss";

function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const url = "https://gmail.us11.list-manage.com/subscribe/post?u=33c7e4c6b7d5ec19fb04c791f&amp;id=0408f6cdfb";

  const resetForm = () => {
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div className="signupForm">
      <h2 className="signupForm-header">Transform Your Life</h2>
      <p className="signupForm-description">Banyan Code Camp is designed to produce craftsman who love to write well-architected code. We don't just teach you the skills; we help you to find a passion in creating great software. Find and develop your purpose in one of the most beautiful islands in the world.</p>
      <p className="signupForm-description">In the coming months we will be releasing the curriculum, schedule, agenda for cultural and immersion experience, and class dates. Leave your info and we'll reach out to you with next steps!</p>
      <input className="signupForm-formInput" type="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
      {
        nameError && <p className="signupForm-error">Name is required</p>
      }
      <input className="signupForm-formInput" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      {
        emailError && <p className="signupForm-error">A valid email is required</p>
      }
      <input className="signupForm-formInput" value={phone} type="tel" onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number" />
      <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <MailchimpForm
              status={status}
              message={message}
              onValidated={subscribe}
              resetForm={resetForm}
              email={email}
              name={name}
              phone={phone}
              setEmailError={setEmailError}
              setNameError={setNameError}
            />
          )}
        />
    </div>
  );
}

export default SignupForm;
