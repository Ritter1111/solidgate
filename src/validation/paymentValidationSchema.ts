import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

export interface PaymentFormValues {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

export const paymentSchema: ObjectSchema<PaymentFormValues> = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Card number is required')
    .matches(/^(\d{4} \d{4} \d{4} \d{4})$/, 'Card number must be in format 1234 1234 1234 1234'),

  expiryDate: Yup.string()
    .required('Expiration date is required')
    .matches(/^(\d{2}\/\d{2})$/, 'Invalid format (MM/YY)'),

  cvc: Yup.string()
    .required('CVC is required')
    .matches(/^\d{3}$/, 'CVC must be 3 digits'),
});
