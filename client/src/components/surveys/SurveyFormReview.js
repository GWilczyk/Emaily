import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({
	handleCancel,
	formValues,
	submitSurvey,
	history
}) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className='left btn-flat yellow darken-3 white-text'
				onClick={handleCancel}
			>
				Back
				<i className='material-icons left'>replay</i>
			</button>
			<button
				className='right btn-flat green white-text'
				onClick={() => submitSurvey(formValues, history)}
			>
				Send Survey
				<i className='material-icons right'>email</i>
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, { submitSurvey })(
	withRouter(SurveyFormReview)
);
