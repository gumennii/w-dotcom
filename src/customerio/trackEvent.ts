export const trackEvent = async (eventName: string, eventData: any) => {
  const SITE_ID = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CUSTOMER_IO_API_KEY;

  if (!SITE_ID || !API_KEY) {
    console.error("Customer.io SITE_ID and API_KEY must be set in environment variables");
    return;
  } else {
    console.log("Customer.io load");
  }

  const response = await fetch("/api/trackEvent", {
    method: "POST",
    body: JSON.stringify({
      name: eventName,
      data: eventData,
    }),
  })
    .then(response => response.json())
    .then(res => ({ success: true }))
    .catch(error => {
      console.error("Error tracking event:", error);
      return {
        success: false,
        error: error,
      };
    });

  return response;
};
