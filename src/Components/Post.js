import React, { Component } from 'react'
import fetch from 'node-fetch'
import './post.css'
import Header from './Header'
import ClearCache from 'react-clear-cache'


// debugger;
let nothing;
let nextButton;
let isprivate;
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edge: [{
                node: {
                    display_url: ''
                }
            }],
            userName: '',
            id: "",
            next: null,
            isNextPage: false,
            isprivate:false,
            postCount:0,
            fullName:'',
            profilePic:'',
            bio:'',
            postPerPage:'30'

        }
    }
    //4179440085
    componentWillUnmount(){

}
    componentDidMount() {
     
}
    fetchData = async siteUrl => {
        try {
            let response = await fetch(siteUrl);
            let json = await response.json();
            // console.log(json.data.user.edge_owner_to_timeline_media.edges[1].node.display_url);
            //    console.log(response);
            //    return json.data.user.edge_owner_to_timeline_media.edges[1].node.display_url
            //    return response;
            let edgeN=await json.data.user.edge_owner_to_timeline_media.edges
            setTimeout(this.setState({
                edge:edgeN,
                next: json.data.user.edge_owner_to_timeline_media.page_info.end_cursor,
                isNextPage: json.data.user.edge_owner_to_timeline_media.page_info.has_next_page

            }),3000)
           
        } catch (error) {
            // console.log(error)

        }
    }
    forceDownload(url, fileName) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    }

    handlechange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    changePostPerPage=(event)=>{
        this.setState({
            postPerPage:event.target.value
        })
    }
    fetchDataid = async () => {
        try {
            let siteUrl = 'https://www.instagram.com/' + this.state.userName + '/?__a=1'
            let response = await fetch(siteUrl);
            let json = await response.json();
            //  this.props.sendData(json.graphql.user.id)
            this.setState({
                id: json.graphql.user.id,
                isprivate: json.graphql.user.is_private,
                profilePic :json.graphql.user.profile_pic_url,
                fullName : json.graphql.user.full_name,
                bio : json.graphql.user.biography,
                postCount :json.graphql.user.edge_owner_to_timeline_media.count
            })
            this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22' + this.state.id + '%22,%22first%22:'+Number(this.state.postPerPage)+',%22after%22:null}');
        } catch (error) {
            console.log(error)
        }
    }
    videoLoadAgain(){
        let vdo=document.body.querySelectorAll('video')
        setTimeout(()=>{ vdo.forEach(vdo=>{
            vdo.load();
            
        })
    },1500)
    
    }

    render() {

        isprivate = (this.state.isprivate === true) ? <h2 className='center'>Sorry the User account is private</h2> : <div></div>
        nothing = (this.state.id === '') ? <h4 className="center">Search Something Example : cristiano</h4> : <div> </div>
        if (this.state.isNextPage === true) {
            nextButton = <button className="buttonNext"  onClick={async() =>{this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22' + this.state.id + '%22,%22first%22:'+ Number(this.state.postPerPage)+',%22after%22:"' + this.state.next + '"}')}} type='submit'>click to see next {this.state.postPerPage} posts</button>
        } else nextButton = <div className='buttonNext'>No more Post !! Thanks</div>


        return (
            <div>
                 <ClearCache>
        {({ isLatestVersion, emptyCacheStorage }) => (
          <div>
            {!isLatestVersion && (
              <p>
                <a
                  href="www.google.com"
                  onClick={e => {
                    e.preventDefault();
                    emptyCacheStorage();
                  }}
                >
                  Update version
                </a>
              </p>
            )}
          </div>
        )}
      </ClearCache>
                <Header pic={this.state.profilePic} post={this.state.postCount} bio={this.state.bio} name={this.state.fullName}/>
                {/* search bar */}
                <div className="center">Click on the images to download !!!</div>
                <div className="search">
                    <input name='shubham' placeholder="username" type="text" value={this.state.userName} onChange={this.handlechange} ></input>
                    <select defaultValue='30' value={this.state.value} onChange={this.changePostPerPage}>
                        <option value='2'>2</option>
                        <option value='20'>20</option>
                        <option  value='30'>30</option>
                        <option value='50'>50</option>
                    </select>
                    <button className="userName" type='submit' onClick={this.fetchDataid}>Submit</button>
                </div>

                {/* result section */}

                <div className="listImg">
                    {this.state.edge.map((node,index) => {
                        if (node.node.is_video === false)
                        return <div key={index} >
                        <img className="img" onClick={() => this.forceDownload(node.node.display_url, "gawer")} src={node.node.display_url} alt=""></img>
                        </div>
                        if (node.node.is_video === true)
                        return <video  ref={'video'} key={index} poster={node.node.display_url} preload='none' className="vdo"  controls  >
                        <source  ref={'source'}  src={node.node.video_url} type="video/mp4" ></source></video>
                        return <div key={index}> </div>
                    })}
                </div>
                {/* footer */}
                <div>
                 {this.videoLoadAgain()}
                    {nothing}
                    {isprivate}
                </div>
                <div className="centerButton">
                    {nextButton}
                </div>

            </div>
        )
    }
}

export default Post;
