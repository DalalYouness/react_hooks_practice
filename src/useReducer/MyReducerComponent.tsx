import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOM":
      return { ...state, nom: action.payload };
    case "SET_PRENOM":
      return { ...state, prenom: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const initialState = {
  nom: "",
  prenom: "",
  age: 0,
};

//using reducer
const MyReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form>
      <div>
        <label>nom:</label>
        <br />
        <input
          onChange={(e) =>
            dispatch({ type: "SET_NOM", payload: e.target.value })
          }
          type="text"
        />
      </div>
      <div>
        <label>prenom:</label>
        <br />
        <input
          onChange={(e) =>
            dispatch({ type: "SET_PRENOM", payload: e.target.value })
          }
          type="text"
        />
      </div>
      <div>
        <label>age:</label>
        <br />
        <input
          onChange={(e) =>
            dispatch({ type: "SET_AGE", payload: +e.target.value })
          }
          type="number"
        />
      </div>
      <input type="submit" value="afficher" />
      <div className="info">
        <p>name:{state.nom}</p>
        <p>prenom:{state.prenom}</p>
        <p>age:{state.age || ""}</p>
      </div>
    </form>
  );
};

export default MyReducerComponent;

/*




 very important note ela l useState hit l useState fhalha fhal useReducer


 react bach kaydir re-render kaybqa yqarn state old o new state ila lqahom tbdlo ka ydir rerender
 - mais hna kayn whd l 2ichkal c'est que la kant state type primitive
 c'est a dire la valeur stocké directement dans le stack donc react mnin kayqarn
 katqarn l values mobachara hit lvariable kayn fih value hna ila tbdat state kaydir re-render

 ex :

 oldState === newState ? hna kat3tih false sff kaydir re-render

 mais whd lmas2ala makyrdch liha bnadem lbal hiya mnin katkoun state 3ibara ela objet
 l objet kaykon rah kaykon fl heap d, o kayn pointer fl stack fih l adress dyal objet

 donc fhad l hal react kaydir
 oldObj == newObj => donc fhad l7ala rah kayqarn ref machi objet content docn state
 rah khasi ykon objet immutable bach yqdr react y3rf rah dar changement
 hit ila mchit hta khalani react ndir
 mataman

 let obj = {
    name : "youness"
 }

 setState(obj.name = "salah");

 hna react bdlt lih l content dyal objet mais ref bqat hiya hiya donc howa fach ghaydir
 oldObj == newObj ? ghadi y3tih nfs ref donc makayn la re-render l composant la walo
 fhad l7ala ana rah bdlt state mais maghay rerenderch react lcomposant o ghaybqayban lina bali matbdl walo

 dkchi elach kandiro

set(...state,name:"salah"); pk?

hit spread kayakhod copie mnin kangolo copie c'est adire lkhda copire o 7atha f une autre place donc rah ref akhra

ex :

let obj2 = ...obj; // hda khda copie o 7atha fblasa akgra o rad adress jdida
let obj2 = obj; hado rah objet whd mais deuc pointers fihom nfs ref

donc mnin kandiro

setState(...state, name:"kamal");
hna react khdina copie l state o bdlna f fields dyal obj o rj3na ref akhra mnin ghadi yqarn ghay3rf state
tbadlat


hit lmo9arana hna kifma kan3rfo rah kanqarno ela mostawa stack rah les objets kaykono fl heap mostaqilin
kan acceder lihom ghir b des pointers hit les languages rah kaywslo ghir l stack f thread local
ama lheap rah ghir solution bach stack may 3mrch kharajna les types de donn volumineux l heap donc
soit l compilaterut dyal un language compilté ola un moteur js fhaml v8 ola node js rah ta homa kay3rfo ghir stack
*/

//normale case

// interface Person {
//   nom: string;
//   prenom: string;
//   age: number;
// }
//   const [person, setPerson] = useState<Person>({
//     nom: "",
//     prenom: "",
//     age: 0,
//   });

//const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPerson({ ...person, nom: e.target.value });
//   };

//   const handleInputPrenom = function (e: React.ChangeEvent<HTMLInputElement>) {
//     setPerson({ ...person, prenom: e.target.value });
//   };

//   const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPerson({ ...person, age: +e.target.value });
//   };
//   return (
//     <form>
//       <div>
//         <label>nom:</label>
//         <br />
//         <input onChange={handleInputName} type="text" />
//       </div>
//       <div>
//         <label>prenom:</label>
//         <br />
//         <input onChange={handleInputPrenom} type="text" />
//       </div>
//       <div>
//         <label>age:</label>
//         <br />
//         <input onChange={handleAge} type="number" />
//       </div>
//       <input type="submit" value="afficher" />
//       <div className="info">
//         <p>name:{person.nom}</p>
//         <p>prenom:{person.prenom}</p>
//         <p>age:{person.age || ""}</p>
//       </div>
//     </form>
//   );

//how useReducer work (fhamto hmdulilah)
//https://chatgpt.com/g/g-p-693a9c1b53808191986a34c91ba0efb2-react/c/69628961-edec-832a-99c1-6eb5a9bee7a8
//part flkhr fiha kolchi
// 7aja mohima anaho action mafihch ghir type o action sf la fih hta l field
//ohad la facon katkhali le code ikoun clean ktar

//donc ka kholasa useReducer katgolik sayab liya function reducer
// fiha la logique li khas b taghyir dyal state o etiti initialisation
// l state onta rja3 loor , ana ghadi n3tik dispatch sift liya fiha naw3
// dyal action li baghi dir o lmo3tayat li baghi t7at fstate
// o ana rah ghanrj3 lik state jdida o
// n3ayat l reducer automatic o ghandir re -render onta rta7
