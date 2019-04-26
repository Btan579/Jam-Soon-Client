export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const validCity = value =>
    /^[a-zA-Z\s]*$/.test(value) ? undefined : 'Must be a valid email address';