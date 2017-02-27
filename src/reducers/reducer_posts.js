import {FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };


export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_POST:
		return { ...state, post: action.payload.data }
	case FETCH_POSTS:
		// reducers need to return an object
		// whenever they return a state
		// the new object return wathever the current state is 
		// plus the data from all the post sended by action
		return { ...state, all: action.payload.data }
	default:
		return state;
	} 
}