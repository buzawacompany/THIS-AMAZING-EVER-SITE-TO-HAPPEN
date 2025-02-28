const handleSubmit = async (e) => {
  e.preventDefault();

  if (!stripe || !elements) return;

  setPaymentProcessing(true);

  // Fetch client secret from backend
  const response = await fetch("http://localhost:5000/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 150 }), // Replace with actual total price
  });

  const { clientSecret } = await response.json();

  const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: { name: formData.name, email: formData.email },
    },
  });

  setPaymentProcessing(false);

  if (error) {
    setMessage(error.message);
  } else if (paymentIntent.status === "succeeded") {
    setMessage("Payment successful! Order placed.");
  }
};
