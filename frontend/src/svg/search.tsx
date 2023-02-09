import React from 'react';
import { SvgIconsProps } from './svg.props';

function Search({
	color = '#111',
	height = 16,
	width = 16,
}: SvgIconsProps): JSX.Element {
	return (
		<svg width={width} height={height} fill={color} viewBox="0 0 16 16">
			<g fillRule="nonzero">
				<path
					d="M458.743 546.257a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486zm-1.06 1.06a4.5 4.5 0 10-6.365 6.364 4.5 4.5 0 006.364-6.363z"
					transform="translate(-448 -544)"
				></path>
				<path
					d="M458.39 552.75a2.94 2.94 0 00-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 001.112-1.004l-.051-.057a.39.39 0 01-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 10-1.299-.752z"
					transform="translate(-448 -544)"
				></path>
				<path
					d="M457.557 555.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 001.06-1.06 1.881 1.881 0 00-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 00.624 1.356l.066-.027.12-.061z"
					transform="translate(-448 -544)"
				></path>
				<path
					d="M461.463 559.142l-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 01-.24-.182zm.617-.616l.444-.444a.31.31 0 00-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 00.051.063l.205-.204-.233-.209z"
					transform="translate(-448 -544)"
				></path>
			</g>
		</svg>
	);
}

export default Search;
