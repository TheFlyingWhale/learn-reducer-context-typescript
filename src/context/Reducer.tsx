import { State } from "./Context";
import { Friend } from "./Context";

//Defines Action types to manipulate the state
export enum Action {
    SET_USER_IMAGE,
    SET_USER_NAME,
    SET_USER_SURNAME,
    SET_USER_AGE,
    SET_USER_LOCATION,
    ADD_FRIEND,
}

//Defines structure and types for the actions
export type ActionType =
    | {
          type: Action.SET_USER_NAME;
          name: string;
      }
    | {
          type: Action.SET_USER_SURNAME;
          surname: string;
      }
    | {
          type: Action.SET_USER_AGE;
          age: number;
      }
    | {
          type: Action.SET_USER_LOCATION;
          location: string;
      }
    | {
          type: Action.SET_USER_IMAGE;
          image: string;
      }
    | {
          type: Action.ADD_FRIEND;
          friend: Friend;
      };

//Reduces commands to manipulate the state
export const reducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case Action.SET_USER_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.name,
                },
            };
        }
        case Action.SET_USER_SURNAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    surname: action.surname,
                },
            };
        }
        case Action.SET_USER_AGE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    age: action.age,
                },
            };
        }
        case Action.SET_USER_LOCATION: {
            return {
                ...state,
                user: {
                    ...state.user,
                    location: action.location,
                },
            };
        }
        case Action.SET_USER_IMAGE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    image: action.image,
                },
            };
        }
        case Action.ADD_FRIEND: {
            return {
                ...state,
                friends: [...state.friends, action.friend],
            };
        }
    }
};
