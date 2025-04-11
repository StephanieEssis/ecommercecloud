import { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-public-key-from-stripe');

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await axios.post('/api/payment/checkout');
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error('Erreur lors de la création du paiement', error);
            }
        };

        createPaymentIntent();
    }, []);

    const handlePayment = async () => {
        const stripe = await stripePromise;
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement, // Assure-toi d'utiliser un élément de carte Stripe pour capturer la carte
            },
        });

        if (error) {
            console.error('Erreur de paiement:', error);
        } else {
            if (paymentIntent.status === 'succeeded') {
                console.log('Paiement réussi');
                // Afficher un message de succès à l'utilisateur
            }
        }
    };

    return (
        <div>
            <button onClick={handlePayment} disabled={!clientSecret}>
                Payer
            </button>
        </div>
    );
};

export default Checkout;
