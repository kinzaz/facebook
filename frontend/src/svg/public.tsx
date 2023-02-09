import React from 'react';
import { SvgIconsProps } from './svg.props';

function Public({
	color = '#111',
	width = '1em',
	height = '1em',
}: SvgIconsProps): JSX.Element {
	return (
		<svg width={width} height={height} fill={color} viewBox="0 0 16 16">
			<g fillRule="evenodd">
				<path
					d="M463.5 552c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 01-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 01-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 016.524 7.434"
					transform="translate(-448 -544)"
				></path>
				<path
					d="M458.107 559.196A7.498 7.498 0 01448.5 552a7.48 7.48 0 013.407-6.283 5.474 5.474 0 00-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 00.193.096"
					transform="translate(-448 -544)"
				></path>
				<path
					fillRule="nonzero"
					d="M464 552a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 10-14 0 7 7 0 0014 0z"
					transform="translate(-448 -544)"
				></path>
			</g>
		</svg>
	);
}

export default Public;
