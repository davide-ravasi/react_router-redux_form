import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// necessary when we use a link anchor inside code
import { Link } from 'react-router';


class PostsIndex extends Component {
	// method that is call whenever component is rendered by react
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
				<Link to={"posts/" + post.id}>
					<span className="float-xs-right">
						{post.categories}
					</span>
					<strong>{post.title}</strong>
				</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div> 
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a post
					</Link>
				</div> 
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul> 
			</div>
		);
	}
}


function mapStateToProps(state) {
	return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }


// export default connect(null, mapDispatchToProps)(PostsIndex);


/* REFACTORING */
//export default connect(null, { fetchPosts: fetchPosts})(PostsIndex);

/* IE6 refactoring variable (condensed) */
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);


