import { useState } from "react";

//https://chatgpt.com/c/693dd2e6-a92c-832e-b12e-f94c6a4bdb45 spread operator with objects le resumé f lkhr
const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    city: "",
    age: undefined,
    accept: false,
    lang: "",
  });

  //hdchi kaml elach hit react khdam b ajax cad single page donc formulaire
  // ga3ma kansiftoh mobachara khasna nwjdo hta dkchi ela chkal objet json onsiftoh
  //hit ajax hiya tecknologie ou bien approch katkhalina anana nqdro nsifto des requettes sans refrechir la page
  //dkchi kaykon d'une maniere asynchrone makantsanawch kol mara server li y3tina html
  //dkchi elach 7na kan7wlo kol 7aja dar fl blasa o ana nbqa khdam ela dkchi dyal sans blockage de la page

  const handleChange = (e) => {
    const input = e.target.name;
    let value = undefined;

    //darouri man check hit attribute value kayn gha f text field ama check fih checked

    //hadi madam kolchi endo value ila checkbox ola chi haja fhal checkbox ndirha f if bohadha
    // switch (e.target.type) {
    //   case "text":
    //     value = e.target.value;
    //     break;
    //   case "checkbox":
    //     value = e.target.checked;
    //     break;
    // }

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    setInputs({
      ...inputs,
      [input]: value,
    });
  };
  return (
    <div className="container my-3 w-25">
      {JSON.stringify(inputs)}
      <form>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">
            city
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            id="city"
            name="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            id="age"
            name="age"
          />
        </div>
        <div className="form-check">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="checkbox"
            name="accept"
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
            onChange={handleChange}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JAVASCRIPT</option>
          </select>
        </div>
        <input className="btn btn-primary" type="submit" value="save" />
      </form>
    </div>
  );
};

export default Form;
