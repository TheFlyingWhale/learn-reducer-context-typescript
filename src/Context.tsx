import React, { ReactNode } from 'react';
import { reducer, Action } from './Reducer';

interface ContextInterface {
	state: State;
	commands: Commands;
}

export interface State {
	name: string;
}

interface Commands {
	setName: (name: string) => void;
}

const initialState = {
	name: 'Ole',
};

const Context = React.createContext<ContextInterface>({
	state: initialState,
	commands: {
		setName: () => {},
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

	const commands: Commands = {
		setName,
	};

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	);
};
