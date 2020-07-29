import React, { Component } from 'react'
import fetch from "node-fetch"


export default class SearchBar extends Component {
    constructor(){
        super()
        this.state={
                userName:[],
                searchName:''
        }
        
    } 
    fetchData=async () =>{
        try{
            let siteUrl='https://www.instagram.com/web/search/topsearch/?context=blended&query='+this.state.searchName
            let response=await fetch(siteUrl);
            let json=await response.json();
             this.setState({
                 userName:json.users
             })
        }catch(error){
            console.log(error)
        }
    }

      handlechange=(event)=>{
          this.setState({
              searchName:event.target.value
          })
      }
  
    render() {
        return (
           <div>
               <div className="mb-3">
               <input name='shubham' type="text" value={this.state.searchName} onChange={this.handlechange} ></input>
               <button className="btn btn-dark p-0 ml-2  btn-md" type='submit' onClick={this.fetchData}>Submit</button>
</div>
               <table class="table">
  <thead class="thead-dark">
    <tr> 
      <th scope="col">S.no</th>
      <th scope="col">Full Name</th>
      <th scope="col">username</th>
      <th scope="col">profile Pic</th>
    </tr>
  </thead>
  <tbody>
    {this.state.userName.map((user,index)=>( <tr>
        <th scope="row">{index+1}</th>
        <td>{user.user.full_name}</td>
        <td>{user.user.username}</td>
        <td><img src={user.user.profile_pic_url} alt='not available'></img></td>
      </tr>
    ))}

  </tbody>
</table>
           </div>
        )
    }
}


