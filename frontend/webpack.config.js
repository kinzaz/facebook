// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// const isDev = process.env.NODE_ENV === 'development';
// const isProd = process.env.NODE_ENV !== 'development';
// const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

// const cssLoaders = extra => {
// 	const loaders = [
// 		{
// 			loader: MiniCssExtractPlugin.loader,
// 			options: {},
// 		},
// 		'css-loader',
// 	];
// 	if (extra) {
// 		loaders.push(extra);
// 	}

// 	return loaders;
// };

// const plugins = [
// 	new HtmlWebpackPlugin({
// 		template: './index.html',
// 		minify: {
// 			collapseWhitespace: isProd && true,
// 		},
// 	}),
// 	new CleanWebpackPlugin(),
// 	new CopyPlugin({
// 		patterns: [
// 			{
// 				from: path.resolve(__dirname, 'src/assets'),
// 				to: path.resolve(__dirname, 'public/assets'),
// 			},
// 		],
// 	}),
// 	new MiniCssExtractPlugin({ filename: filename('css') }),
// ];

// module.exports = {
// 	context: path.resolve(__dirname, 'src'),
// 	mode: 'development',
// entry: {
// 	main: './index.tsx',
// },
// 	output: {
// 		filename: filename('js'),
// 		path: path.resolve(__dirname, 'public'),
// 	},
// 	resolve: {
// 		extensions: ['.js', '.json', '.css', 'scss', 'jsx', '.ts', '.tsx'],
// 		alias: {
// 			'@': path.resolve(__dirname, 'src'),
// 			'@modules': path.resolve(__dirname, 'src/modules'),
// 			'@pages': path.resolve(__dirname, 'src/pages'),
// 			'@styles': path.resolve(__dirname, 'src/styles'),
// 			'@shared': path.resolve(__dirname, 'src/shared'),
// 			'@hooks': path.resolve(__dirname, 'src/hooks'),
// 		},
// 	},
// 	optimization: {
// 		splitChunks: {
// 			chunks: 'all',
// 		},
// 		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
// 	},
// 	plugins,
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(jsx|js)$/,
// 				include: path.resolve(__dirname, 'src'),
// 				exclude: /node_modules/,
// 				use: [
// 					{
// 						loader: 'babel-loader',
// 						options: {
// 							presets: [
// 								[
// 									'@babel/preset-env',
// 									{
// 										targets: 'defaults',
// 									},
// 								],
// 								'@babel/preset-react',
// 							],
// 						},
// 					},
// 				],
// 			},
// 			{
// 				test: /\.(tsx|ts)$/,
// 				include: path.resolve(__dirname, 'src'),
// 				exclude: /node_modules/,
// 				use: [
// 					{
// 						loader: 'babel-loader',
// 						options: {
// 							presets: [
// 								[
// 									'@babel/preset-env',
// 									{
// 										targets: 'defaults',
// 									},
// 								],
// 								'@babel/preset-react',
// 							],
// 						},
// 					},
// 				],
// 			},
// 			{
// 				test: /\.css$/i,
// 				use: cssLoaders(),
// 			},
// 			{
// 				test: /\.s[ac]ss$/i,
// 				use: cssLoaders('sass-loader'),
// 			},
// 			{
// 				test: /\.(png|jpg|svg|gif)$/,
// 				type: 'asset/resource',
// 			},
// 			{
// 				test: /\.(woff|woff2|eot|ttf|otf)$/i,
// 				type: 'asset/resource',
// 			},
// 			{
// 				test: /\.(woff|woff2|eot|ttf|otf)$/i,
// 				type: 'asset/resource',
// 			},
// 			{
// 				test: /\.(woff|woff2|eot|ttf|otf)$/i,
// 				type: 'asset/resource',
// 			},
// 			{
// 				test: /\.(csv|tsv)$/i,
// 				use: ['csv-loader'],
// 			},
// 		],
// 	},
// };

const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV !== 'development';
const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const plugins = [
	new HtmlWebpackPlugin({
		template: './index.html',
		minify: {
			collapseWhitespace: isProd && true,
		},
	}),
	new CleanWebpackPlugin(),
	new CopyPlugin({
		patterns: [
			{
				from: path.resolve(__dirname, 'src/assets'),
				to: path.resolve(__dirname, 'dist/assets'),
			},
			// {
			// 	from: path.resolve(__dirname, 'src/styles/icons/icons.css'),
			// 	to: path.resolve(__dirname, 'dist/icons'),
			// },
		],
	}),
	new MiniCssExtractPlugin({ filename: filename('css') }),
	new webpack.ProvidePlugin({
		React: 'react',
	}),
];

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {},
		},
		'css-loader',
	];
	if (extra) {
		loaders.push(extra);
	}

	return loaders;
};

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './index.tsx',
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		watchFiles: ['src/**/*'],
		compress: true,
		port: 8080,
		open: true,
		historyApiFallback: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	plugins,
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: cssLoaders(),
			},
			{
				test: /\.s[ac]ss$/i,
				use: cssLoaders('sass-loader'),
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
