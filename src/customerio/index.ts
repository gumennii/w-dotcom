interface TrackEventPayload {
  email: string;
  name: string;
  program: string;
}

export const trackEvent = async (eventName: string, eventData: any) => {
  const SITE_ID = "a5081fd3a779c8494758";
  const API_KEY = "08f79a3aaa73ddb7ddfa";

  if (!SITE_ID || !API_KEY) {
    console.error("Customer.io SITE_ID and API_KEY must be set in environment variables");
    return;
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(`${SITE_ID}:${API_KEY}`)}`,
  };

  try {
    const response = await fetch(`https://track.customer.io/api/v1/customers/${eventData.email}/events`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: eventName,
        data: eventData,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Event tracked:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};
