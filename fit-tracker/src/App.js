import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import List from './components/List'
import AddPost from './components/addPost'
import background from './media/pic.png'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      
    }
    this.deletePost = this.deletePost.bind(this)
    this.addPost = this.addPost.bind(this)
    this.editPost = this.editPost.bind(this)
    
  }

  componentDidMount() {
    axios.get('/api/posts').then( res => {
      this.setState({
        posts: res.data
      }) 
    })
  }

  deletePost(id) {
    axios.delete(`/api/delete_post/${id}`).then( res => {
      this.setState({
        posts: res.data
      })
    })
  } 

  addPost (newPost) {
    axios.post('/api/add_post', {
      post: newPost 
    }).then(res => { 
      this.setState({
        posts: res.data
      })
    })
  }

  editPost (editPost, id) {
   axios.put(`/api/edit_post/${id}`, {
     post: editPost
   }).then(res => {
     this.setState({
       posts: res.data
     })
   })

  }

 // FOR CSS STYLING: GET SPACING AND LAYOUT FIRST, THEN DO COLORS AND FONTS
  render(){
    // console.log(this.state)
    return (
      <div className="App">
        {/* <img src={background} className="body"></img> */}

        <div className="header">
          <h1 className="App-name">Fit-Tracker</h1>
        </div>

        

          <div className="posts-div">
            <AddPost addPost={this.addPost}/>

            <List posts={this.state.posts} editPost={this.editPost} deletePost={this.deletePost}/>
          </div>

          <div className="footer"> "The only easy day was yesterday" </div>
        
      </div>
    );
  }
}

export default App;