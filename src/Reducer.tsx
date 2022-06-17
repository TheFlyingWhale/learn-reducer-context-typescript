import { State } from './Context';

export enum Action {
	SET_NAME,
}

export type ActionType = {
	type: Action.SET_NAME;
	name: string;
};

export const reducer = (state: State, action: ActionType) => {
	switch (action.type) {
		case Action.SET_NAME: {
			return {
				...state,
				name: action.name,
			};
		}
	}
};
