import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/hello.jsx';

ReactDom.render(
    <HelloWorld />,
    document.querySelector('#react')
);