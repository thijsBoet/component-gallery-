import { useState } from 'react';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import Dropdown from './components/Dropdown';

const App = () => {
	const [selection, setSelection] = useState(null);

	const handleSelect = option => {
		setSelection(option);
	};

	const options = [
		{ label: 'The Color Red', value: 'red' },
		{ label: 'The Color Green', value: 'green' },
		{ label: 'A Shade of Blue', value: 'blue' },
	];

	return (
		<Dropdown options={options} value={selection} onChange={handleSelect} />
	);
};

export default App;
