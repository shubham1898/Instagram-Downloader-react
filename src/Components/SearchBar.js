import React, { Component } from 'react'


export default class SearchBar extends Component {
    constructor(){
        super()
        this.state={
                userName:''
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    // 
    // 
    fetchData=async () =>{
        try{
            let siteUrl='https://www.instagram.com/'+this.state.userName+'/?__a=1'
            let response=await fetch(siteUrl);
            let json=await response.json();
             this.props.sendData(json.graphql.user.id)
        }catch(error){
            console.log(error)
        }
    }

    demoMethod(){
        this.props.sendData('val');
      }
      handlechange=(event)=>{
          this.setState({
              userName:event.target.value
          })
      }
    render() {
        return (
           <div>
               <input name='shubham' type="text" value={this.state.userName} onChange={this.handlechange} ></input>
            {/* {  this.props.sendData(this.state.userName)} */}
            <button type='submit' onClick={this.fetchData}>Submit</button>
           </div>
        )
    }
}


