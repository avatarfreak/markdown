import React, { Component } from 'react';
import Editor from './Editor'
import Preview from './Preview'

const intialMarkdown = `
================================ 
# Heading 1
## Heading 2
### Heading 3
==================================  
Here is Link:   
[freeCodeCamp](https://www.freecodecamp.com)  
==================================  
Inline \`code\` has \`back-ticks around\` it. 
==================================   
Block Code
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s); 
\`\`\`
==================================  
Fruits list:
  * apples
  * grapes
  * bananas
  
Numbered list:
  1. apples
  2. grapes
  3. bananas  

==================================  
BlockQuote:  
> Blockquotes are very handy in email to emulate reply text.   
==================================  
Image:  
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")  
==================================  
Bolded Text:  
Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~  
==================================
`
export class MarkDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // intialing the value 
            markdown: intialMarkdown
        }

        this.handleChange = this.handleChange.bind(this);
    }
    //changing on fly
    handleChange(event) {
        this.setState({
            markdown: event.target.value //getting value from textarea using event.target.value.(pub sub)
        });
    }

    render() {
       
        return (
            <div className="container jumbotron" >
                <div className="row">
                    <div className="col-md-6" >
                        <Editor markdown={this.state.markdown} handleChange={this.handleChange}/>
                    </div>
                    <div className="col-md-6 text-left" >
                        <Preview markdown={this.state.markdown}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default MarkDown
