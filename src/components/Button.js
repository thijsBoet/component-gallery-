import PropTypes from 'prop-types';
import className from 'classnames';

function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) {
	const classes = className(
		rest.className,
		'px-3',
		'py-1',
		'border',
		'mx-3',
		'my-1',
		'flex',
		'items-center',
		{
			'border-blue-500 bg-blue-500 text-white': primary,
			'border-gray-600 bg-gray-600 text-white': secondary,
			'border-green-500 bg-green-500 text-white': success,
			'border-yellow-500 bg-yellow-500 text-white': warning,
			'border-red-500 bg-red-500 text-white': danger,
			'border-blue-500 text-blue-500': outline && primary,
			'border-gray-600 text-gray-600': outline && secondary,
			'border-green-500 text-green-500': outline && success,
			'border-yellow-500 text-yellow-500': outline && warning,
			'border-red-500 text-red-500': outline && danger,
			'rounded-full': rounded,
			'bg-white': outline,
		}
	);
	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	outline: PropTypes.bool,
	rounded: PropTypes.bool,
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!warning) +
			Number(!!success) +
			Number(!!danger);

		if (count > 1) {
			return new Error(
				'Only one of primary, secondary, success, warning, danger can be true'
			);
		}
	},
};

export default Button;
