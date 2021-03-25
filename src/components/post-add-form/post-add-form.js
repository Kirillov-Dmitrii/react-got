import React from 'react';
import './post-add-form.css';

export default class PostAddForm extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         input: ''
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
   }

   onChange(e) {
      this.setState({
         input: e.target.value
      })
   }

   onSubmit(e) {
      e.preventDefault()
      this.props.onAdd(this.state.input)
      this.setState({
         input: ''
      })
   }

   render() {
      return (
         <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
               type="text"
               placeholder="what do you think about"
               className="form-control new-post-label"
               onChange={this.onChange}
               value={this.state.input}
            />
            <button 
               type="submit"
               className="btn btn-outline-secondary"
               >
            Add your post</button>
         </form>
      )
   }
   
}
