import React, { Component } from 'react'
import { RichUtils } from 'draft-js';

export default class Toolbar extends Component {

    applyStyle = (e, style) => {
        const { updateEditorState, editorState } = this.props;
        e.preventDefault();
        updateEditorState(RichUtils.toggleInlineStyle(editorState, style));

    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.applyStyle(e, 'BOLD')}>Bold</button>
                <button onClick={(e) => this.applyStyle(e, 'ITALIC')}>Italic</button>
                <button onClick={(e) => this.applyStyle(e, 'UNDERLINE')}>Underline</button>
            </div>
        )
    }
}
