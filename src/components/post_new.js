import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content}, handleSubmit } = this.props;
		return (
			<form onSubmit={ handleSubmit(this.props.createPost) }>
				<h3>Create a new post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>
				<div className="form-group">
					<label>Content</label>
					<input type="text" className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">submit</button>
			</form>
		);
	}
}



function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a username'
	}

	return errors;
}


// as the exact function as connect
// used to inject ours action creator
// into our component
// the difference is that reduxFrom has one addictional args


// DOCS : http://redux-form.com/6.5.0/examples/

// CONNECT: first argument is mapStateToProps, 2nd is mapDispatchToProps
// REDUXFORM: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default  reduxForm({
	form: 'PostsNewform',
	fields: ['title', 'categories', 'content'],
	validate
},null, { createPost })(PostsNew);