import React, { Component } from 'react';
import { EditorState, Editor as DraftEditor, RichUtils } from 'draft-js';

import './Editor.css';
import Toolbar from './Toolbar';

export default class Editor extends Component {
    state = { editorState: EditorState.createEmpty() }

    udpateEditorState = (editorState) => this.setState({ editorState });

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.udpateEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    render() {
        return (
            <div>
                <Toolbar
                    updateEditorState={this.udpateEditorState}
                    editorState={this.state.editorState}
                />
                <DraftEditor
                    ref="editor"
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.udpateEditorState}
                />
            </div>
        );
    }
}
