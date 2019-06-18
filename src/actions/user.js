import { SubmissionError } from 'redux-form';
import { toast } from "react-toastify";
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            res.json();
            toast.success("Registration successful!");
        })
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                toast.error("Registration unsuccessful!");
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};