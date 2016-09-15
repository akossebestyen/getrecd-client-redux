import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if(!values.tournamentName) errors.tournamentName = 'Required';
  if(!values.numOfTeams) errors.numOfTeams = 'Required';
  return errors; 
}

class TournamentsForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, onSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit((data)=>{ onSubmit(data); reset();})}>
        <div>
          <label htmlFor="firstName">Tournament Name</label>
          <Field className="form-control" name="tournamentName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Number of Teams</label>
          <Field className="form-control" name="numOfTeams" component="input" type="number"/>
        </div>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    )
  }
}

TournamentsForm.propTypes = {
  onSubmit : React.PropTypes.func.isRequired,
}

// Decorate the form component
TournamentsForm = reduxForm({
  form: 'tournaments', // a unique name for this form
  validate
})(TournamentsForm);

export default TournamentsForm
