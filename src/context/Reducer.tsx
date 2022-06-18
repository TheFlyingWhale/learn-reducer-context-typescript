import { State } from './Context';

//Defines Action types to manipulate the state
export enum Action {
	SET_IMAGE,
	SET_NAME,
	SET_SURNAME,
	SET_AGE,
	SET_LOCATION,
}

//Defines structure and types for the actions
export type ActionType =
	| {
			type: Action.SET_NAME;
			name: string;
	  }
	| {
			type: Action.SET_SURNAME;
			surname: string;
	  }
	| {
			type: Action.SET_AGE;
			age: number;
	  }
	| {
			type: Action.SET_LOCATION;
			location: string;
	  }
	| {
			type: Action.SET_IMAGE;
			image: string;
	  };

//Reduces commands to manipulate the state
export const reducer = (state: State, action: ActionType) => {
	switch (action.type) {
		case Action.SET_NAME: {
			return {
				...state,
				name: action.name,
			};
		}
		case Action.SET_SURNAME: {
			return {
				...state,
				surname: action.surname,
			};
		}
		case Action.SET_AGE: {
			return {
				...state,
				age: action.age,
			};
		}
		case Action.SET_LOCATION: {
			return {
				...state,
				location: action.location,
			};
		}
		case Action.SET_IMAGE: {
			return {
				...state,
				image: action.image,
			};
		}
	}
};
