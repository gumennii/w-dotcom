export const associateEvent = async (eventData: any) => {
  const SITE_ID = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CUSTOMER_IO_API_KEY;

  if (!SITE_ID || !API_KEY) {
    console.error("Customer.io SITE_ID and API_KEY must be set in environment variables");
    return;
  } else {
    console.log("AssociateEvent load");
  }

  const response = await fetch("/api/associateEvent", {
    method: "PUT",
    body: JSON.stringify({ ...eventData }),
  })
    .then(response => response.json())
    .then(res => ({ success: true }))
    .catch(error => {
      console.error("Error associate event:", error);
      return {
        success: false,
        error: error,
      };
    });

  return response;

  // try {
  //   const response = await fetch(`https://track.customer.io/api/v1/customers/${eventData.email}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ ...eventData }),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   const responseData = await response.json();
  //   return responseData;
  // } catch (error) {
  //   console.error("Error tracking event:", error);
  // }
};
