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

	render() {
		return (
			<div> 
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a post
					</Link>
				</div> 
				List of blog posts 
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }


// export default connect(null, mapDispatchToProps)(PostsIndex);


/* REFACTORING */
//export default connect(null, { fetchPosts: fetchPosts})(PostsIndex);

/* IE6 refactoring variable (condensed) */
export default connect(null, { fetchPosts })(PostsIndex);