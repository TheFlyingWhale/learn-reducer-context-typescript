import React, { ReactNode } from 'react';
import { reducer, Action } from './Reducer';

//Defines structure and types for the context
interface ContextInterface {
	state: State;
	commands: Commands;
}

//Defines structure and types for user portion of the state
export interface User {
	image: string;
	name: string;
	surname: string;
	age: number;
	location: string;
}

export type Relation = 'friend' | 'enemy' | undefined;

export interface Friend {
	image: string;
	name: string;
	surname: string;
	age: number;
	relation: Relation;
}

//Defines structure and types for the state
export interface State {
	user: User;
	friends: Friend[];
}

//Defines commands to manipulate the state
interface Commands {
	setUserName: (name: string) => void;
	setUserSurName: (surname: string) => void;
	setUserAge: (age: number) => void;
	setUserLocation: (location: string) => void;
	setUserImage: (image: string) => void;
	addFriend: (friend: Friend) => void;
}

//Defines the initial state
const initialState: State = {
	user: {
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKfvEBXt0DCovOTM_JLgtUgYQTcPW6WnBxyJdNJH4C1Sam76y5FSm4gJFSgvX8uRLyHs&usqp=CAU',
		name: '',
		surname: '',
		age: 0,
		location: '',
	},
	friends: [],
};

//Creates the context
const Context = React.createContext<ContextInterface>({
	state: initialState,
	commands: {
		setUserName: () => {},
		setUserSurName: () => {},
		setUserAge: () => {},
		setUserLocation: () => {},
		setUserImage: () => {},
		addFriend: () => {},
	},
});

//Function to retrieve state or commands from the context
export const ContextUse = () => React.useContext(Context);

//Provides the context with state and commands
export const Provider = (props: { children: ReactNode }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const setUserName = (name: string) => {
		dispatch({
			type: Action.SET_USER_NAME,
			name,
		});
	};

	const setUserSurName = (surname: string) => {
		dispatch({
			type: Action.SET_USER_SURNAME,
			surname,
		});
	};

	const setUserAge = (age: number) => {
		dispatch({
			type: Action.SET_USER_AGE,
			age,
		});
	};

	const setUserLocation = (location: string) => {
		dispatch({
			type: Action.SET_USER_LOCATION,
			location,
		});
	};

	const setUserImage = (image: string) => {
		dispatch({
			type: Action.SET_USER_IMAGE,
			image,
		});
	};

	const addFriend = (friend: Friend) => {
		dispatch({
			type: Action.ADD_FRIEND,
			friend,
		});
	};

	const commands: Commands = {
		setUserName,
		setUserSurName,
		setUserAge,
		setUserLocation,
		setUserImage,
		addFriend,
	};

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	);
};
