import { useRef, useState } from "react";

const FormValidationBeginner = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);
  const countryInput = useRef(null);
  const acceptConditionsField = useRef(null);

  const [formErrors, setFormErrors] = useState({});

  const getFormValues = () => {
    return {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      message: messageInput.current?.value,
      country: countryInput.current?.value,
      acceptConditions: acceptConditionsField.current?.checked,
    };
  };

  const isValidName = (name: string) => {
    return name.trim().length >= 3;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const isValidMessage = (message: string) => {
    return message.trim().length >= 10;
  };

  const isValidCountry = (country: string) => {
    return country !== "";
  };
  const isAcceptedConditions = (accepted: boolean) => {
    return accepted === true;
  };

  const validateForm = () => {
    let isFormValid = true;
    setFormErrors({});
    const { name, email, message, country, acceptConditions } = getFormValues();
    if (!isValidName(name)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be at least 3 characters long",
      }));
      isFormValid = false;
    }
    if (!isValidEmail(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is not valid",
      }));
      isFormValid = false;
    }
    if (!isValidMessage(message)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message must be at least 10 characters long",
      }));
      isFormValid = false;
    }
    if (!isValidCountry(country)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        country: "Please select a country",
      }));
      isFormValid = false;
    }
    if (!isAcceptedConditions(acceptConditions)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        acceptConditions: "You must accept the conditions",
      }));
      isFormValid = false;
    }
    return isFormValid;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  };

  return (
    <div className={"container-fluid w-75 mx-auto my-5"}>
      {Object.keys(formErrors).length > 0 ? (
        <div className="alert alert-danger">
          <ul>
            {Object.values(formErrors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <h1>Contact form</h1>
        <hr />
        {/*<-- Name input -->*/}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            ref={nameInput}
          />
        </div>

        {/*<-- Email input -->*/}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            ref={emailInput}
          />
        </div>

        {/*<-- Message input -->*/}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            ref={messageInput}
          ></textarea>
        </div>

        {/*<-- Country select -->*/}
        <div className="form-group mb-4">
          <label>Country</label>
          <label htmlFor="country"></label>
          <select className="form-control" id="country" ref={countryInput}>
            <option value="">Select country</option>
            <option value="MA">Maroc</option>
            <option value="DZ">Algérie</option>
            <option value="TN">Tunisie</option>
          </select>
        </div>

        {/*<-- Checkbox -->*/}
        <div className="form-check mb-4">
          <div className="d-flex">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="acceptAllConditions"
              ref={acceptConditionsField}
            />
            <label className="form-check-label" htmlFor="acceptAllConditions">
              Accept all conditions
            </label>
          </div>
        </div>

        {/*<-- Submit -->*/}
        <button type="submit" className="btn btn-primary w-100 mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidationBeginner;
