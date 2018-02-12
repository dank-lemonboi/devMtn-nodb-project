import React, {Component} from 'react';



export default class Messages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: this.props.text,
            edit: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this)
    }

    handleChange( event ) {
        this.props.edit(this.props.id, event.target.value);
        this.setState({ text: event.target.value })
    }

    edit( event ) {
        if(event.key === "Enter" && this.state.text.length !== 0) {
            this.props.edit(this.props.id, this.state.text);
            this.setState({edit: false})
        }
    }

    render() {
        return(
            <div className="message_container">
              <div className="message_text">

              {
              this.state.edit
              ?
              <input className="edit_message" value={this.state.text}
                                              onChange={this.handleChange} 
                                              onKeyPress={this.edit}/>
              :
              <span>{this.state.text}</span>
              }

                 <button className="edit" onClick={ () => this.setState({ edit: !this.state.edit }) }>Edit</button>
                 <button className="delete" onClick={ () => this.props.remove(this.props.id)}>Delete</button>
              
              </div>
            </div>
        );
    }
}