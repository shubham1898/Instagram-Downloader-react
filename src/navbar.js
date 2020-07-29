import React, { Component } from 'react'

let style1={
       cursor:'pointer'
   }
class navbar extends Component {
   toggleHome(){
       let mainroot=document.querySelector('#root')
       let searchroot=document.querySelector('#root-search')
       let contactroot=document.querySelector('#root-contact')
       mainroot.hidden=false
       searchroot.hidden= true
       contactroot.hidden=true
   }
   toggleSearch(){
       let mainroot=document.querySelector('#root')
       let searchroot=document.querySelector('#root-search')
       let contactroot=document.querySelector('#root-contact')
       mainroot.hidden=true
       searchroot.hidden= false
       contactroot.hidden=true
   }
   toggleContact(){
       let mainroot=document.querySelector('#root')
       let searchroot=document.querySelector('#root-search')
       let contactroot=document.querySelector('#root-contact')
       mainroot.hidden=true
       searchroot.hidden= true
       contactroot.hidden=false
   }
   getLink=()=>{
     let link=document.querySelector('#insta-link-target')
     return link.ariaLabel
   }
   

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-1 ">
            <a class="navbar-brand" href={this.getLink()}>
            {/* <img src="" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"></img> */}
            {/* <svg class="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg> */}
            <i class="fa fa-instagram mr-3" aria-hidden="true"></i>
              Instagram</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  <span class="navbar-toggler-icon"></span>  </button>
            
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <div class="nav-link" onClick={this.toggleHome} style={style1} >Home <span class="sr-only">(current)</span></div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" onClick={this.toggleSearch} style={style1}>Search Username</div>
                </li>
                         <div class="collapse navbar-collapse" id="navbarNav">
                <li class="nav-item">
                  <div class="nav-link" onClick={this.toggleContact} style={style1} >Contacts</div>
                </li></div>
              </ul>
            
          </nav>
        )
    }
}

export default navbar
