import React, { Component } from 'react'

 class Editor extends Component {
    constructor(props) {
        super(props);  
    }
    render() {
        const shadowTextarea = {
            padding: '10px',
            color: '#bdb5b5',
            backgroundColor: '#092b25ed',
            border: '3px solid transparent',
            borderRadius: '10px',
            height: '400px',
            width: '100%',
            resize: 'none',
            outline: 'none',
            overflowX: 'hidden',
            overflowY: 'scroll',
            boxShadow: '1px 6px 6px #333'

        }
        return (
            <div>
                <h2 className="text-white-50">Markdown</h2>
                <textarea style={shadowTextarea} id="editor"
                    placeholder="Write something here..."
                    value={this.props.markdown}
                    onChange={this.props.handleChange} />
            </div>

        )
    }
}

export default Editor
