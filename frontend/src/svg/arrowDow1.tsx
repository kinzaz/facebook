import React from 'react';
import { SvgIconsProps } from './svg.props';

function ArrowDown1({
	width = '20',
	height = '20',
}: SvgIconsProps): JSX.Element {
	return (
		<svg width={width} height={height} viewBox="0 0 16 16">
			<path
				fillRule="nonzero"
				d="M452.707 549.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L456 552.586l-3.293-3.293z"
				transform="translate(-448 -544)"
			></path>
		</svg>
	);
}

export default ArrowDown1;
