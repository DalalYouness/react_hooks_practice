import { useEffect, useRef } from "react";

//https://chatgpt.com/g/g-p-693a9c1b53808191986a34c91ba0efb2-react/c/69407291-ade0-832b-b2a8-5ddc7a314515
const FormUseRef = () => {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   city: "",
  //   age: undefined,
  //   accept: false,
  //   lang: "",
  // });

  /* on va utiliser useRef */
  const inputNameRef = useRef();
  const inputCityRef = useRef();
  const inputAgeRef = useRef();
  const inputLangRef = useRef();
  const inputCheckRef = useRef();
  /*dans le cas des formulaire on utilise pas useState on utilise useRef
    useRef et useState font la meme chose c'est le stockage des donnés a utilisé dans notre
    composants mais la diff c'est que useRef ne fait pas appel a la methode render
    avec chaque changement c'est pour ca c'est ideal avec les formulaire
    parceque dans le formulaire on a besoin seulement de recuperer les valeur pour
    les envoyes vers le backend , on va pas les afficher dans notre compoosants  donc
    c'est pas professionelle de faire un render a chaque fois on va reduire
    la performance de notre app
   */

  // const handleChange = (e) => {
  //   const input = e.target.name;
  //   let value = undefined;

  //   if (e.target.type === "checkbox") {
  //     value = e.target.checked;
  //   } else {
  //     value = e.target.value;
  //   }

  //   setInputs({
  //     ...inputs,
  //     [input]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name: inputNameRef.current.value,
      city: inputCityRef.current.value,
      age: inputAgeRef.current.value,
      accept: inputCheckRef.current.checked,
      lang: inputLangRef.current.value,
    };
    console.log(values);
  };

  useEffect(() => {
    inputNameRef.current.value = "youness";
    inputAgeRef.current.value = new Date(2025, 1, 2)
      .toISOString()
      .substring(0, 10); //"yyyy-MM-dd" on applle cette format format iso et pour la recuperer on fait comme ca
    inputLangRef.current.value = "css";
    inputCityRef.current.focus();
  }, []);
  return (
    <div className="container my-3 w-25">
      <form onSubmit={handleSubmit}>
        {/* pour prouver que avec use state avec chaque change et recuperation de donnéé dans textbox react fait
        un re-render */}
        {new Date().toLocaleString()} {/* avec chaque tape react fait render */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            ref={inputNameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">
            city
          </label>
          <input
            className="form-control"
            type="text"
            id="city"
            name="city"
            ref={inputCityRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            className="form-control"
            type="date"
            id="age"
            name="age"
            ref={inputAgeRef}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="accept"
            ref={inputCheckRef}
          />
          <label className="form-check-label mx-1" htmlFor="accept">
            accept our rules
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="fv-lang">favorite language</label>
          <select
            className="form-control"
            name="lang"
            id="fv-lang"
            ref={inputLangRef}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JAVASCRIPT</option>
          </select>
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default FormUseRef;
