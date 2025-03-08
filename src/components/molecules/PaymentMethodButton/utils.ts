import appleLogo from '@/assets/appleLogo.svg';
import googleLogo from '@/assets/googleLogo.svg';
import paypalLogo from '@/assets/paypalLogo.svg';

export const paymentOptions = [
  { id: 'apple', logo: appleLogo, background: 'black' },
  { id: 'google', logo: googleLogo, background: 'black' },
  { id: 'paypal', logo: paypalLogo, background: 'yellow' },
  {
    id: 'apple_paypal',
    dual: true,
    left: { logo: appleLogo, background: 'black' },
    right: { logo: paypalLogo, background: 'yellow' },
  },
  {
    id: 'google_paypal',
    dual: true,
    left: { logo: googleLogo, background: 'black' },
    right: { logo: paypalLogo, background: 'yellow' },
  },
];
