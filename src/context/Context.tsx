import React, { ReactNode } from 'react';
import { reducer, Action } from './Reducer';

interface ContextInterface {
	state: State;
	commands: Commands;
}

export interface State {
	name: string;
	surname: string;
	age: number;
	location: string;
}

interface Commands {
	setName: (name: string) => void;
	setSurName: (surname: string) => void;
	setAge: (age: number) => void;
	setLocation: (location: string) => void;
}

const initialState: State = {
	name: '',
	surname: '',
	age: 0,
	location: '',
};

const Context = React.createContext<ContextInterface>({
	state: initialState,
	commands: {
		setName: () => {},
		setSurName: () => {},
		setAge: () => {},
		setLocation: () => {},
	},
});

export const ContextUse = () => React.useContext(Context);

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

	const commands: Commands = {
		setName,
		setSurName,
		setAge,
		setLocation,
	};

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	);
};
