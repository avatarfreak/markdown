import React, { Component } from 'react'
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = function (url, text) {
    return `<a target="_blank" href="${url}">${text} </a>`;
};

 class Preview extends Component {
    constructor(props) {
        super(props)
    }

    //please refer to Overriding default heading token by adding an embedded anchor tag like on GitHub
    //https://marked.js.org/#/USING_PRO.md#renderer
    markDownHTML(str) {
        return {
            __html: marked(str, { breaks: true, renderer: renderer }),
        }
    };

    render() {
        const shadowTextarea = {
            padding: '10px',
            color: '#5f5b5b',
            backgroundColor: '#dde0e0',
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
                <h2 class="text-center text-white-50">Preview</h2>
                <div style={shadowTextarea}>
                    <div id="preview" dangerouslySetInnerHTML={this.markDownHTML(this.props.markdown)} />

                </div>
            </div>
        )

    }
}

export default Preview
