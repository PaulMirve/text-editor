import React, { Component } from 'react'
import Editor from './Editor';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="editor-container">
                <Editor/>
            </div>
        )
    }
}
