import { email, required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', {
    ...required,
    message: 'This field is required'
});

extend('email', {
    ...email,
    message: 'Please enter a valid email address'
});