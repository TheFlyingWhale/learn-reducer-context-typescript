import React, { ReactNode } from 'react';
import { reducer, Action } from './Reducer';

export interface State {
	user: {
		image: string;
		name: string;
		surname: string;
		age: number;
		location: string;
	};
	friends: {
		image: string;
		name: string;
		surname: string;
		age: number;
		relation: 'friend' | 'enemy' | undefined;
	}[];
}

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

//Defines commands to manipulate the state
interface Commands {
	setUserName: (name: string) => void;
	setUserSurName: (surname: string) => void;
	setUserAge: (age: number) => void;
	setUserLocation: (location: string) => void;
	setUserImage: (image: string) => void;
	addFriend: (friend: {
		image: string;
		name: string;
		surname: string;
		age: number;
		relation: 'friend' | 'enemy' | undefined;
	}) => void;
}

interface ContextInterface {
	state: State;
	commands: Commands;
}

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

export const useContext = () => React.useContext(Context);

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

	const addFriend = (friend: {
		image: string;
		name: string;
		surname: string;
		age: number;
		relation: 'friend' | 'enemy' | undefined;
	}) => {
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
