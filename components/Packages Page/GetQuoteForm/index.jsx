'use client'

import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import './style.css'

const GetQuouteForm = () => {
  const initialFormDetails = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [status, handleSubmit] = useForm('mbjbpwzk'); // xjvqvzol
  const [buttonText, setButtonText] = useState('Submit');
  const [showDropdown, setShowDropdown] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const onSubjectSelect = (e) => {
    e.preventDefault();
    onFormUpdate('subject', e.target.value);
  }

  const onFormSubmit = async (e) => {
    try {
      await handleSubmit(e);
      if (status.succeeded) {
        setFormDetails(initialFormDetails);
      }
    } catch (error) {
      setButtonText('Try again'); // Add Toast Notification
    }
  };

  return (
    <form id="get-quote-form" onSubmit={(e) => { onFormSubmit(e); }}>
      <div className="mt-14 w-full lg:w-3/5 flex flex-col">
        <div className="input-row flex flex-col md:flex-row">
          <div className="flex-1">
            <input type="text" name="fullName" value={formDetails.firstName} placeholder="Full Name" onChange={(e) => onFormUpdate('fullName', e.target.value)} required />
            <ValidationError field="fullName" prefix="full Name" errors={status.errors} />
          </div>
          <div className="flex-1">
            <input type="email" name="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required />
            <ValidationError field="email" prefix="Email" errors={status.errors} />
          </div>
        </div>

        <div className="input-row flex flex-col md:flex-row">
          <div className="flex-2">
            <input type="text" name="phone" value={formDetails.phone} placeholder="Phone (OPT.)" onChange={(e) => onFormUpdate('phone', e.target.value)} />
            <ValidationError field="phone" prefix="Phone" errors={status.errors} />
          </div>
          <div className="flex-1">
            <input type="company" name="company" value={formDetails.company} placeholder="Company/Organization Name" onChange={(e) => onFormUpdate('company', e.target.value)} required />
            <ValidationError field="company" prefix="Company/Organization Name" errors={status.errors} />
          </div>
        </div>

        <div className="relative">
          <div className="subject-select flex justify-between items-center">
            <span className="font-bold">{!initialFormDetails.message ? "I’d Like to get more Information on...." : initialFormDetails.subject}</span>
            <button onClick={(e) => {e.preventDefault(); setShowDropdown(!showDropdown);}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15"><path fill="#020055" d="M7.5 12L0 4h15z"></path></svg>
            </button>
          </div>

          <div className={`absolute bg-[var(--brand-color-5)] text-[var(--brand-color-1)] font-bold gap-2 right-0 sm:-right-[5%] md:-right-[15%] top-[25%] sm:top-[20%] flex px-10 py-5 flex-col ${!showDropdown && 'hidden'}`}>
            <button onClick={(e) => onSubjectSelect(e)}>Ballo Ads</button>
            <button onClick={(e) => onSubjectSelect(e)}>Social Media Management</button>
            <button onClick={(e) => onSubjectSelect(e)}>Web Development</button>
          </div>

          <textarea className={`${!initialFormDetails.subject && 'hidden'}`} divs="6" name="message" value={formDetails.message} placeholder="Custom Quote (OPT.)" onChange={(e) => onFormUpdate('message', e.target.value)} />

          <button type="submit" disabled={status.submitting} className="submit-btn font-bold bg-[var(--brand-color-3)] w-full">
            {status.submitting && (
              <div className="flex">
                <span>Sending</span>
                <div className="loader">
                  <li className="ball" />
                  <li className="ball" />
                  <li className="ball" />
                </div>
              </div>
            )}
            {(!status.succeeded && !status.submitting) && (<span>{buttonText}</span>)}
            {status.succeeded && (
              <div className="sent-btn">
                <span>Sent</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19L5.53 7.97a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l4.5-4.5Z" clipRule="evenodd" /></svg>
              </div>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default GetQuouteForm