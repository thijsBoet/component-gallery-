import React from 'react';
import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
	return (
		<div>
			<div>
				<Button
					className='mb-4'
					success
					rounded
					outline
					onClick={() => console.log('onClicked')}
				>
					<GoBell />
					Click me!!
				</Button>
			</div>
			<div>
				<Button danger outline onMouseEnter={() => console.log('onMouseOver')}>
					<GoCloudDownload />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase />
					See Deal!
				</Button>
			</div>
			<div>
				<Button secondary outline>
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button secondary rounded>
					Something!
				</Button>
			</div>
		</div>
	);
};

export default ButtonPage;
