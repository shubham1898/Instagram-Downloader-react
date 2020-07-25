import React,{Component} from 'react'
import fetch from 'node-fetch'
import './post.css'


// debugger;
class Post extends Component{
constructor(props){
    super(props)
    this.state={
        edge:[{
            node:{
                display_url:''
            }
        } ],
        userName:'',
        id:""
    }
}
//4179440085
    
    // componentWillReceiveProps(){
    //     this.setState({
    //         id:this.props.id
    //     })
    //     this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22'+this.props.id+'%22,%22first%22:60,%22after%22:null}');

    // }
    componentDidMount() {
    this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22'+this.state.id+'%22,%22first%22:60,%22after%22:null}');
  }
fetchData=async siteUrl =>{
    try{
        let response=await fetch(siteUrl);
        let json=await response.json();
       console.log(json.data.user.edge_owner_to_timeline_media.edges[1].node.display_url);
    //    console.log(response);
    //    return json.data.user.edge_owner_to_timeline_media.edges[1].node.display_url
    //    return response;
    this.setState({
        edge:json.data.user.edge_owner_to_timeline_media.edges
    })
    }catch(error){
        // console.log(error)

    }}
    forceDownload(url, fileName){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
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
    handlechange=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    fetchDataid=async () =>{
        try{
            let siteUrl='https://www.instagram.com/'+this.state.userName+'/?__a=1'
            let response=await fetch(siteUrl);
            let json=await response.json();
            //  this.props.sendData(json.graphql.user.id)
            this.setState({
                edge:[],
                id:json.graphql.user.id
            })
            this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%22'+this.state.id+'%22,%22first%22:60,%22after%22:null}');
        }catch(error){
            console.log(error)
        }
    }
    render(){
  
      
        return(
            <div>
                <div className="search">
                <input name='shubham' type="text" value={this.state.userName} onChange={this.handlechange} ></input>
            {/* {  this.props.sendData(this.state.userName)} */}
            <button type='submit' onClick={this.fetchDataid}>Submit</button>
                </div>
                <div className="listImg">
             {this.state.edge.map(node=>{if(node.node.is_video===false)
             return <div >
            <img className="img" onClick={()=>this.forceDownload(node.node.display_url,"gawer")} src={node.node.display_url} alt=""></img>
            </div>
            if(node.node.is_video===true)
             return <video className="vdo" onClick={()=>this.forceDownload(node.node.video_url,"gawer")}    controls  >
             <source await src={node.node.video_url} type="video/mp4" ></source></video>
             return <div>The result will be displayed here</div>
             })}
             </div>
            </div>
        )
    }
}

// function


    

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