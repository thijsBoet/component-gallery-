import React from 'react';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import Dropdown from './components/Dropdown';

const App = () => {
	const options = [
		{ label: 'The Color Red', value: 'red' },
		{ label: 'The Color Green', value: 'green' },
		{ label: 'A Shade of Blue', value: 'blue' },
	]

	return <Dropdown options={options} />;
};

export default App;
