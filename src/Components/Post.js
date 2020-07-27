import React, { Component } from 'react'
import fetch from 'node-fetch'
import './post.css'


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
            next:null,
            isNextPage:false,
            isprivate:false
        }
        nothing = <h4> </h4>
    }
    //4179440085

    // componentWillReceiveProps(){
    //     this.setState({
    //         id:this.props.id
    //     })
    //     this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22'+this.props.id+'%22,%22first%22:60,%22after%22:null}');

    // }
    componentWillUnmount(){
this.refs.source.src='';
this.refs.video.load();
}
    componentDidMount() {
        this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22' + this.state.id + '%22,%22first%22:60,%22after%22:'+this.state.next+'}');

    }
    fetchData = async siteUrl => {
        try {
            let response = await fetch(siteUrl);
            let json = await response.json();
            console.log(json.data.user.edge_owner_to_timeline_media.edges[1].node.display_url);
            //    console.log(response);
            //    return json.data.user.edge_owner_to_timeline_media.edges[1].node.display_url
            //    return response;
            this.setState({
                edge: json.data.user.edge_owner_to_timeline_media.edges,
                next:json.data.user.edge_owner_to_timeline_media.page_info.end_cursor,
                isNextPage:json.data.user.edge_owner_to_timeline_media.page_info.has_next_page
                
            })
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
    fetchDataid = async () => {
        try {
            let siteUrl = 'https://www.instagram.com/' + this.state.userName + '/?__a=1'
            let response = await fetch(siteUrl);
            let json = await response.json();
            //  this.props.sendData(json.graphql.user.id)
            this.setState({
                edge: [],
                id: json.graphql.user.id,
                isprivate:json.graphql.user.is_private
            })
            this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22' + this.state.id + '%22,%22first%22:60,%22after%22:null}');
        } catch (error) {
            console.log(error)
        }
    }
// giveNext=async ()=>{
//     this.componentDidMount()

// }
    render() {
        isprivate=(this.state.isprivate===true)? <h2 className='center'>Sorry the User account is private</h2>:<div></div>
        nothing = (this.state.id === '') ? <h4 className="center">Search Something Example : cristiano</h4> : <div> </div>
        if(this.state.isNextPage===true){
           nextButton=<button className="buttonNext" onClick={()=>this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22' + this.state.id + '%22,%22first%22:60,%22after%22:"'+this.state.next+'"}')} type='submit'>click to see next 50 posts</button>
        }else nextButton=<button className="buttonNext" disabled='true' type='reset'>No More Post!!!! Thank You</button>
        return (
            <div>
                {/* search bar */}
                <div className="center">Click on the images to download !!!</div>
                <div className="search">
                    <input name='shubham' placeholder="username" type="text" value={this.state.userName} onChange={this.handlechange} ></input>

                    <button className="userName" type='submit' onClick={this.fetchDataid}>Submit</button>
                </div>
                {/* result section */}

                <div className="listImg">
                    {this.state.edge.map(node => {
                        if (node.node.is_video === false)
                            return <div >
                                <img className="img" onClick={() => this.forceDownload(node.node.display_url, "gawer")} src={node.node.display_url} alt=""></img>
                            </div>
                        if (node.node.is_video === true)
                            return <video ref='video' className="vdo" onClick={() => this.forceDownload(node.node.video_url, "gawer")} controls  >
                                <source ref='source' await src={node.node.video_url} type="video/mp4" ></source></video>
                        return <div> </div>
                    })}
                </div>
                {/* footer */}
                <div>
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

// function
/* {  this.props.sendData(this.state.userName)} */



// let extractData=async ()=>{
//    let json1= await fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%224179440085%22,%22first%22:60,%22after%22:null}')
//        let arr=await json1;
//        return arr
// }

//    async function Post (){
//     let json1= await fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%224179440085%22,%22first%22:60,%22after%22:null}')
// console.log(typeof json1)

//         return (
//         <div>
//          {json1}
//         </div>
//         )

// }

export default Post;
