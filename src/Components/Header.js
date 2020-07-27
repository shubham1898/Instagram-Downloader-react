import React, { Component } from 'react'


export default class Header extends Component {
    
    render() {
        if(this.props.name!==''){
            return(
                <div className='center headerBlock'>
                    <h1><span><img src={this.props.pic} alt='profile pic not available'></img></span> {this.props.name}</h1>
                    <p className='bio'>{this.props.bio}</p>
                    <p>post count : {this.props.post}</p>
                </div>
            )
        }else return (
           <div className="center headerBlock">
              <div><h1 className="header"> Welcome to Instagram Downloader!!!!!!!!!!</h1></div>
             <div> <h5>Enter the instagram user name to download their media content</h5></div>
           </div>
        )
    }
}


