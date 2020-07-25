import React,{Component} from 'react'
import fetch from 'node-fetch'


// debugger;
class Post extends Component{
constructor(){
    super()
    this.state={
        edge:[ ]
    }
}
    
    
    componentDidMount() {
    this.fetchData('https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={%22id%22:%224179440085%22,%22first%22:60,%22after%22:null}');
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

    render(){
  
      
        return(
            <div>
             {/* <img src={`${this.state.edge[2].node.display_url}` } alt=""></img>  */}
             {/* {this.state.edge[1].node} */}
             {this.state.edge.map(node=>(
            <div><img src={node.node.display_url} alt=""></img></div>
             ))}
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