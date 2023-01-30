import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {
	const finalClassNames = classNames(
		'bg-white border rounded shadow p-3 w-full',
		className
	);

	return (
		<div {...rest} className={finalClassNames}>
			{children}
		</div>
	);
};

export default Panel;
