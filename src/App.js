import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from "marked";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Markdown 
## Subheading
[link](google.com) \`inline code\`
~~~
Thomas = { 
  age: 12,
  intelligence: no
 }
 ~~~
 - Item 1
 - Item 2



>Here's a blockquote
>
> that is multi-line

I **like** penguins![penguin](https://images.app.goo.gl/RuecgNTFDSXaLwrb6
`,
    };
  }

  /* # Markdown 

## subheading

[link](google.com). 

`code`

```this is a code block```

1. Item 1
2. Item 2
3. Item 3

> Here's a block quote!

![penguin](https://images.app.goo.gl/RuecgNTFDSXaLwrb6)

**bold text**
*/
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    const inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    const outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>

              <div className="input" style={inputStyle}>
                <textarea
                  id="editor"
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  {" "}
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
