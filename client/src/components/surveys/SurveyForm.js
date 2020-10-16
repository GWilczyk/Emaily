import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ name, label }) => {
			return (
				<Field
					key={name}
					type='text'
					name={name}
					label={label}
					component={SurveyField}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.handleNext)}>
					{this.renderFields()}
					<Link to='/surveys' className='btn-flat red white-text'>
						Cancel
					</Link>
					<button type='submit' className='right btn-flat teal white-text'>
						Next
						<i className='material-icons right'>done</i>
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
};

export default reduxForm({
	form: 'surveyForm',
	validate,
	destroyOnUnmount: false
})(SurveyForm);
