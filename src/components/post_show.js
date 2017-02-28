import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	static contextTypes = {
		router: PropTypes.object
	};

	onDeleteClick() {
		this.props.deletePost(this.props.params.id)			
		.then(() => {
				// blog post has been created, navigate the user to the index
				// we navigate by calling this.context.router.push with the
				// new path naviagte to
				// PUSH is a method of redux router
				this.context.router.push('/');
			});;
	}

	render() {

		//const post = this.props.post;
		const { post } = this.props; // equivalent in ecma6

		//if(!this.props.post) {
		if(!post) {	// equivalent in ecma6
			return <div>Loading.............</div>;
		}
		return (
			<div>
				<Link to="/">Back to Index</Link>
				<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-sx-right">Delete post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect( mapStateToProps, { fetchPost, deletePost })(PostsShow);