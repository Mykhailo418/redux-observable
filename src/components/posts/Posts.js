import React, {useState} from 'react';
import {connect} from 'react-redux';
import {runFecthPostsAC} from '../../actions/posts';

const columnsNumber = 3;

const Posts = ({loading, posts, runFecthPostsAC}) => {
  const [searchValue, setSearch] = useState('');

  if (loading == null) runFecthPostsAC();
  if (loading == null || posts == null)  return null;
  if (loading) return 'LOADING...';
  return (
    <div>
      <input type="text" value={searchValue} onChange={onSearch} placeholder="Search" />
      <br />
      <div className="row">
        {outputPosts(posts)}
      </div>
    </div>
  );

  function onSearch(e){
    setSearch(e.target.value);
  }

  function outputPosts(data){
    if(!Array.isArray(data)) return;
    const num = Math.ceil(posts.length/columnsNumber);
    data = data.filter(post => post.title.indexOf(searchValue) > -1);
    return new Array(columnsNumber)
      .fill(null)
      .map((_, i) => <div className="col" key={`column${i}`}>
          {data.slice(i*num, i*num + num).map((post) => <p key={post.id}>{post.title}</p>)}
        </div>);
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.data,
    loading: state.posts.loading,
  }
}

export default connect(mapStateToProps, {runFecthPostsAC})(Posts);
