import React from 'react';
// import Header from './Components/Header'
// import SearchBar from './Components/SearchBar'
import Post from './Components/Post'
import Footer from './Components/Footer'


class App extends React.Component{

  //  this.getData = this.getData.bind(this)
 
//  getData(val){
//   // do not forget to bind getData in constructor
//   this.setState({
//     id:val
//   })
//   console.log(val);
// }
  render(){
    
  return (
    <div key='1' >
      <Post key='1' />
      <Footer key='2' />
    </div>
  );
}
}

export default App;
