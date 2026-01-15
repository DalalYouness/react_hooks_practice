/* hna ghandwiw ela kifach l parent kayqdr ysift data l child
   ba3d lmarat kanbghiw ndiro orginsation l code o kan7tajo composant
   y3ayat l composant o aussi ydwiw mea b3diyathom
 */

import { useState } from "react";

/* Exemple 1 : simple exemple
  - parent a une variable
  - child qui a le code d'affichage

 o hadi rah bayna deja kankhdmo biha bzf
*/

// const Child = ({ name: user }) => {
//   return (
//     <>
//       <div>username : {user}</div>
//     </>
//   );
// };

// const Parent = () => {
//   const username = "youness";

//   return (
//     <>
//       <Child name={username} />
//     </>
//   );
// };

/*
    deuxieme exemple
    d'abord l'inverse le child veut changer une chose chez le parent
*/

// export const Child = ({ onHandleIncrement }) => {
//   return (
//     <>
//       <button onClick={onHandleIncrement}>+</button>
//     </>
//   );
// };

// export const Parent = () => {
//   const [counter, setcounter] = useState(0);

//   const increment = () => {
//     setcounter(counter + 1);
//   };
//   return (
//     <>
//       <div>counter : {counter}</div>
//       <Child onHandleIncrement={increment} />
//     </>
//   );
// };

// export default Parent;

// communication parent vers le child



