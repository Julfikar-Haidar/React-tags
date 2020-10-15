import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css'

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tags: []
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(tags) {
        this.setState({tags})
      }
    
    render() {
        return (
            <div>
                <TagsInput value={this.state.tags} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Tags;