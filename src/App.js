import React from 'react';
// import Header from './Components/Header'
// import SearchBar from './Components/SearchBar'
import Post from './Components/Post'
import Footer from './Components/Footer'
// import {service} from './serviceWorker'
import url from './wwe'


class App extends React.Component{

  //  this.getData = this.getData.bind(this)
 
 getData(){
  // do not forget to bind getData in constructor
  // this.setState({
  //   id:val
  // })
  console.log(url);
}
  render(){
    
  return (
    <div key='1' >
      {this.getData()}
      <Post key='1' />
      <Footer key='2' />
    </div>
  );
}
}

export default App;
