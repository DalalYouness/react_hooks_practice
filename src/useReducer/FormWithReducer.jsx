import { useReducer, useRef } from "react";

const INITIAL_FORM_VALUES = {
  nom: "",
  prenom: "",
  language: "",
  isAccepted: false,
};

const reducerForm = (formInputs, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...formInputs,
        [action.payload.name]: action.payload.value,
      };
    case "SELECT":
      return {
        ...formInputs,
        [action.payload.name]: action.payload.value,
      };
    case "CHECKED":
      return {
        ...formInputs,
        [action.payload.name]: action.payload.checked,
      };
    default:
      return formInputs;
  }
};

const FormWithReducer = () => {
  const inputNom = useRef();
  const inputPrenom = useRef();
  const inputLang = useRef();
  const inputCheck = useRef();

  const [formInputs, dispatch] = useReducer(reducerForm, INITIAL_FORM_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "INPUT", payload: inputNom.current });
    dispatch({ type: "INPUT", payload: inputPrenom.current });
    dispatch({ type: "SELECT", payload: inputLang.current });
    dispatch({ type: "CHECKED", payload: inputCheck.current });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>nom</label>
          <input ref={inputNom} type="text" name="nom" />
        </div>
        <div>
          <label>prenom</label>
          <input ref={inputPrenom} type="text" name="prenom" />
        </div>
        <div>
          <label>favorite language</label>
          <select ref={inputLang} name="language">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JS</option>
          </select>
        </div>
        <div>
          <input ref={inputCheck} type="checkbox" name="isAccepted" />
          <label>accept our rules</label>
        </div>
        <button type="submit">enregistrer</button>
      </form>
      <hr />
      <div>
        <p>nom:{formInputs.nom}</p>
        <p>prenom:{formInputs.prenom}</p>
        <p>languages:{formInputs.language}</p>
        <p>acceptingRules:{formInputs.isAccepted.toString()}</p>
      </div>
    </>
  );
};

export default FormWithReducer;
