import React from 'react';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import Post from './Components/Post'
import Footer from './Components/Footer'


class App extends React.Component{
 constructor(){
   super()
   this.state={
     id:''
   }
  //  this.getData = this.getData.bind(this)
 }
//  getData(val){
//   // do not forget to bind getData in constructor
//   this.setState({
//     id:val
//   })
//   console.log(val);
// }
  render(){
    
  return (
    <div >
      <Header/>
      {/* <SearchBar sendData={this.getData}/> */}
      <Post id={this.state.id} />
      <Footer />
    </div>
  );
}
}

export default App;
