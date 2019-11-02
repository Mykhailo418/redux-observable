import React, {useState} from 'react';
import {connect} from 'react-redux';
import {runFecthPostsAC as runFecth, cancelFecthPostsAC as cancelFecth} from '../../actions/posts';

const columnsNumber = 3;

const Posts = ({loading, posts, runFecth, cancelFecth}) => {
  const [searchValue, setSearch] = useState('');

  if (loading == null) runFecth();
  return (
    <div>
      <input type="text" value={searchValue} onChange={onSearch} placeholder="Search" />
      <button className="btn btn-success" disabled={loading} onClick={runFecth}>Refetch</button>
      <button className="btn btn-danger" disabled={!loading} onClick={cancelFecth}>Cancel Fetch</button>
      <br />
      <div className="row">
        {(loading) ? 'LOADING...' : outputPosts(posts)}
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

export default connect(mapStateToProps, {runFecth, cancelFecth})(Posts);
