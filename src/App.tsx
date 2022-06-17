import { Provider } from './Context';
import Display from './Display';
import Manipulator from './Manipulator';

function App() {
	return (
		<Provider>
			<Display />
			<Manipulator />
		</Provider>
	);
}

export default App;
