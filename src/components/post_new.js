import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

	// to access this property inside a component
	// it's like props
	// to access router property on context type of the app
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate the user to the index
				// we navigate by calling this.context.router.push with the
				// new path naviagte to
				// PUSH is a method of redux router
				this.context.router.push('/');
			});
	}


	// with {...title} we attach to each input a set of property to
	// let redux form take the control
	// the object is created on bottom and injected with te const var below

	render() {
		const { fields: { title, categories, content}, handleSubmit } = this.props;
		return (
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
				<h3>Create a new post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">submit</button>

				<Link to="/" className="btn btn-danger">
					Cancel
				</Link>				
			</form>
		);
	}
}



function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a username'
	}

	if(!values.categories) {
		errors.categories = 'Enter a categories'
	}

	if(!values.content) {
		errors.content = 'Enter a content'
	}

	return errors;
}


// as the exact function as connect
// used to inject ours action creator
// into our component
// the difference is that reduxForm has one addictional args


// DOCS : http://redux-form.com/6.5.0/examples/

// redux form is like connect
// so:
// CONNECT: first argument is mapStateToProps, 2nd is mapDispatchToProps
// REDUXFORM: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// form:    is a unique token
// don't need to be like the name of the class

export default  reduxForm({
	form: 'PostsNewform', // unique token
	fields: ['title', 'categories', 'content'], // array of the fields contained in form
	validate
},null, { createPost })(PostsNew);


// behind the scenes redux uses this informations to create a specific state 
// and to assign the changing value to this object

/*
EX.

state === {
	form: {
		PostNewForm: {
			title: '..................',
			categories: '........................',
			content: '.............................'
		}
	}

}




*/