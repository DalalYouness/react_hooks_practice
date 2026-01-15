import { useEffect, useState } from "react";

const FunctionLifeCycleUseEffect = () => {
  /*
    useState est utilisé car, en React, on ne modifie jamais le DOM
    directement comme en JavaScript vanilla.

    C’est React qui joue le rôle d’intermédiaire entre nous et le DOM réel.
    Lorsqu’on modifie un state, React :
      - génère un nouveau Virtual DOM
      - compare l’ancien avec le nouveau (diffing)
      - applique uniquement les changements au DOM réel

    Pour informer React qu’un état a changé et qu’un re-render doit avoir lieu,
    on utilise la fonction setState.
  */
  const [counter, setcounter] = useState(0);

  /*
    1 — Exécuter une opération après le premier rendu du composant :
    useEffect avec un tableau de dépendances vide se comporte comme
    componentDidMount dans un class component.
    Il s’exécute une seule fois, juste après le premier render.
  */
  useEffect(() => {
    console.log("First mount effect → counter =", counter);
  }, []);

  /*
    2 — Exécuter une opération à chaque fois qu’un état ou une prop change :
    Ici, useEffect observe la variable 'counter'.
    À chaque modification de 'counter', React effectue un nouveau render,
    puis exécute cet effet. Il s’exécute aussi après le premier render.
  */
  useEffect(() => {
    console.log("counter updated");
  }, [counter]);

  /*
    3 — Exécuter une opération après chaque render :
    Lorsque useEffect n’a aucun second paramètre, React exécute cet effet
    après chaque render, qu’il soit provoqué par un changement de state,
    de props, ou par un parent.
  */
  useEffect(() => {
    console.log("I run after every render");
  });

  /*
    4 — Effect avec cleanup :
    La fonction retournée par useEffect (cleanup) s’exécute dans deux cas :
      - juste avant que l’effet soit exécuté à nouveau (si une dépendance change)
      - lorsque le composant est démonté (unmount)

    Cela équivaut au comportement de componentWillUnmount.
  */
  useEffect(() => {
    console.log("useEffect with cleanup executed");

    return () => {
      console.log("cleanup executed (before next effect or on unmount)");
    };
  }, []);

  const handleIncrement = () => {
    setcounter(counter + 1);
  };

  const handleDecrement = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <button onClick={handleIncrement} className="">
        Incrémenter
      </button>
      <button onClick={handleDecrement} className="">
        Décrementer
      </button>
      <span>counter : {counter}</span>
    </>
  );
};

export default FunctionLifeCycleUseEffect;
/*
tfakar entityScan et ComponentScan enableJpaRepository
avec le package par default , parceque si je ne creer
pas les classes scaner dans le meme packae ou se trouve
la classe du spring-boot
*/
