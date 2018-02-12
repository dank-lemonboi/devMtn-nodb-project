import React, { Component } from 'react';
import Messages from './Messages.js';
import url from '../api.js';


import axios from 'axios';



export default class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.createPost = this.createPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.removePost = this.removePost.bind(this);

    }

    componentDidMount() {
        axios.get( url ).then( response => {
            this.setState({messages: response.data})
        });
    }

    handleChange( event ) {
        this.setState({
            text: event.target.value
        });
    }

    createPost( event ) {
        if(event.key === 'Enter' && this.state.text.length > 0) {
            axios.post(url, {text: event.target.value}).then( response => {
                this.setState({messages: response.data, text: ""})
                
            });
        }
        }

    editPost(id, text) {
        axios.put( url +`/${id}`, text ).then( response => {
            this.setState({messages: response.data})
        })

    }

    removePost( id ) {
        axios.delete(url + `/${id}`).then( response => {
            this.setState({messages: response.data})
            console.log(response)
        });
    
    }


    render() {
        return (
            <div className="container">
                <div className="parent_message_container">
                    <div className="child_message_container">
                    {
                    this.state.messages.map( message => (
                        <Messages text={message.text} 
                                  id={message.id}
                                  edit={ this.editPost} 
                                  remove={ this.removePost}
                                  key={message.id} />
                    ))
                }
                    </div>
                </div>
                <div className="new_message_container">
                   <input  onKeyPress={this.createPost}
                           onChange={this.handleChange}
                           value={this.state.text}
                           placeholder="Whats on your mind?"
                           className="input" />

                </div>

            </div>



        );
    }
}