import { State } from './Context';

export enum Action {
	SET_NAME,
	SET_SURNAME,
	SET_AGE,
	SET_LOCATION,
}

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
	  };

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
	}
};
