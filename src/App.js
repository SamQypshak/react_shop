import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      items:[
         {
          id:1,
          title:'Стул'
         }
      ]

      
    }
  }
  render(){
  
  return (
    <div className="wrapper">
      <Header/>
      <Footer/>
     
    </div>
  );
    
}
}

export default App;
