import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/post_new';
import PostsShow from './components/post_show';


	// remember to tell React where to put nested element in App
	// with {this.props.children} in render method
export default(
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
)

// this.props.params.id for PostsShow


// if we nest an element ex. {Greeting} we add it in to App
// attached to his props

// google.com/ => renders App


