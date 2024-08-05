export const associateEvent = async (eventData: any) => {
  const SITE_ID = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CUSTOMER_IO_API_KEY;

  if (!SITE_ID || !API_KEY) {
    console.error("Customer.io SITE_ID and API_KEY must be set in environment variables");
    return;
  } else {
    console.log("AssociateEvent load");
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(`${SITE_ID}:${API_KEY}`)}`,
  };

  try {
    const response = await fetch(`https://track.customer.io/api/v1/customers/${eventData.email}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ ...eventData }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};
