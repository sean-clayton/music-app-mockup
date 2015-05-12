import React from 'react'
import Electron from './components/electron.jsx'
import Titlebar from './components/titlebar.jsx'

window.React = React;
React.render(<Titlebar />, document.body);