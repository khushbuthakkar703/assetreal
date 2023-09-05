export const checkValidate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
        errors.email = 'Invalid Email';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    }
    return errors;
};

export const checkValidateRegister1 = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
        errors.email = 'Invalid Email';
    }
    if (!values.code) {
        errors.code = 'Registration Code is required';
    }
    return errors;
};

export const checkValidateRegister2 = (values) => {
    let errors = {};
    if (!values.country) {
        errors.country = 'Country is required';
    }
    if (!values.phone) {
        errors.phone = 'Phone is required';
    }
    return errors;
};

export const checkValidateRegister3 = (values) => {
    let errors = {};
    if (!values.password) {
        errors.password = 'Password is required';
    }
    return errors;
};