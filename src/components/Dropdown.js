import { useState } from 'react';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const handleOptionClick = option => {
			setIsOpen(false);
			console.log(option.value);
		};

	const renderedOptions = options.map(option => {
		return (
			<div onClick={() => handleOptionClick(option)} key={option.value}>
				{option.label}
			</div>
		);
	});

	return (
		<div>
			<div onClick={handleClick}>Select...</div>
			{isOpen && <div>{renderedOptions}</div>}
		</div>
	);
};

export default Dropdown;