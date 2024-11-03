//많은 파일들이 있는데 이걸 웹사이트 브라우저 상에서 한번에 실행할 수 있게
//만들어주는 라이브러리
//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 시작점
  output: {
    filename: 'bundle.js', // 번들된 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 결과물 위치
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 .js 파일에 대해 Babel 사용
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html', // 템플릿 HTML 파일
      chunks: ['bundle'],
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    compress: true,
    liveReload: false,
    port: 3000,
  },
  resolve: {
    extensions: ['.js'], // 확장자 처리
  },
  mode: 'development', // 개발 모드
};