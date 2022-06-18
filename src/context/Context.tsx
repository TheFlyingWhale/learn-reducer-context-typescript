import React, { ReactNode } from 'react';
import { reducer, Action } from './Reducer';

//Defines structure and types for the context
interface ContextInterface {
	state: State;
	commands: Commands;
}

//Defines structure and types for the state
export interface State {
	image: string;
	name: string;
	surname: string;
	age: number;
	location: string;
}

//Defines commands to manipulate the state
interface Commands {
	setName: (name: string) => void;
	setSurName: (surname: string) => void;
	setAge: (age: number) => void;
	setLocation: (location: string) => void;
	setImage: (image: string) => void;
}

//Defines the initial state
const initialState: State = {
	image:
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKfvEBXt0DCovOTM_JLgtUgYQTcPW6WnBxyJdNJH4C1Sam76y5FSm4gJFSgvX8uRLyHs&usqp=CAU',
	name: '',
	surname: '',
	age: 0,
	location: '',
};

//Creates the context
const Context = React.createContext<ContextInterface>({
	state: initialState,
	commands: {
		setName: () => {},
		setSurName: () => {},
		setAge: () => {},
		setLocation: () => {},
		setImage: () => {},
	},
});

//Function to retrieve state or commands from the context
export const ContextUse = () => React.useContext(Context);

//Provides the context with state and commands
export const Provider = (props: { children: ReactNode }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const setName = (name: string) => {
		dispatch({
			type: Action.SET_NAME,
			name,
		});
	};

	const setSurName = (surname: string) => {
		dispatch({
			type: Action.SET_SURNAME,
			surname,
		});
	};

	const setAge = (age: number) => {
		dispatch({
			type: Action.SET_AGE,
			age,
		});
	};

	const setLocation = (location: string) => {
		dispatch({
			type: Action.SET_LOCATION,
			location,
		});
	};

	const setImage = (image: string) => {
		dispatch({
			type: Action.SET_IMAGE,
			image,
		});
	};

	const commands: Commands = {
		setName,
		setSurName,
		setAge,
		setLocation,
		setImage,
	};

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	);
};
