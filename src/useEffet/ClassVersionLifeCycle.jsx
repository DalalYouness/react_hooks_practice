import React, { Component } from "react";

export default class ClassVersionLifeCylcle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 15,
    };
    console.log("hi iam the constructor");
  }

  handleIncrement = () => {
    this.setState((prevCounter) => {
      return {
        counter: prevCounter.counter + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevCounter) => {
      return {
        counter: prevCounter.counter - 1,
      };
    });
  };

  componentDidMount = () => {
    console.log("component mounted");
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(prevState);
    //alert(prevState.counter);
    console.log(snapshot);
  };

  componentWillUnmount = () => {
    console.log("component dead");
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    const scrollValue = window.scrollY;
    return scrollValue; //par exemple hadi hiya snapshot li rj3at
  };

  // kaytra7 react sou2al wach aykhsni n3awd ndir render o wraha ki t3ayat l update? ila true rj3at hdchi li kaytra
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return nextState.age !== this.state.age;
  // };
  render() {
    return (
      <>
        {console.log("hi im render function")}
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        {this.state.counter}
      </>
    );
  }
}

{
  /*
    toujours ay 7aja bdinaha f mounting mnin nbghiw n7aydoha n7aydoha f willUnmount
    mounting dyal composant c'est a dire rendering dyalo la bghina mea ydar dar chi operation fl background
    rah kandiroha f didmount fhal fetching l data b lconsomation dyal chi api man lback end

    lmohim les methodes li kaynin homa :
      1 - componentDidMount
      2 - componentDidUpdate      => had les trois rah mafhomin
      3 - componentWillUnmount

      -------------------------------------------
      4 - shouldComponentUpdate : kifma kan3rfo mea kol mara kadar setState o kanchangew
      l'etat , le code dyalha fih observer anaho kay3rf bali anaho rah state tbadlat
      kaykhali le code li freact y3wd y3ayt l render bach ybdl l mo7tawa dyal page man b3d makayqarn btabi3t
      l7al virtual dom jdid mea lqdim , b3d lmarat kan7tajo anana wakha tbdl chi haja f states mandirch render hut aslan
      dik l7aja makatbanch l user matalan kansiftha l back end ola chi haja hna makayn lach nkhali render
      t3awd idar liha call exemple b state age
      https://chatgpt.com/c/69389b0a-ffa0-832f-be0c-17eaf022ba20 donc had l methode dima l code li fiha
      ldakhl ikoun kayrj3 true ola false , ila rj3at true , z3ma ila t7a9at had l condition 3ad dir render
      ila mat79atch madirch render , lien rah char7 kolchi mzn shoud qbal render bach react tchouf wach ghadir render
      ola la fhala qalti howa li katswlo ila rj3at liha true ghadin ydir render cad tra updating cad
      l'evenement ComponentDidUpdate ghadi ykhdm

      5 - getSnapshotBeforeUpdate => had l methode kankhdm biha mnin kankon baghi n7tafd b chi qima
      man dom l qdim ghadi n7tajha qbal ma react ydf3 changement l real dom dyal navigateur ,
      dik l mar7ala fin react kaydir diff bin vdom lqdim ol vdom jdid bach ychouf taghyirat
      une fois kay3raf chno tbdl kaydf3 les chang l dom reel 7na fhad lmar7ala li lwast qbal
      ma react ydf3 les changements bghina ndiro chi haja mataln n7tafd b height dyal scroll
      fin kant hna kayji getSnapshot ol valeur li kansift manha hiya li kaydkhodha CompUpdate
      ela chkal param snapshot , getSnap wst manha m7taj trj3 li bghiti man dom rado b document api
      qlil fin kankhdmo biha
      , rah kolchi kayn f nfs lien

      6 - getDerivedStateFromProps : raaaaaare fin kankhdmo biha
*/
}
