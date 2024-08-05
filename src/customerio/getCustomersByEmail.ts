export const getCustomersByEmail = async (customerEmail: string) => {
  const APP_API_KEY = process.env.APP_API_KEY;

  if (!APP_API_KEY) {
    console.error("Customer.io APP_API_KEY must be set in environment variables");
    return;
  }

  const headers = {
    Authorization: `Bearer ${APP_API_KEY}`,
  };

  try {
    const response = await fetch(`https://api.customer.io/v1/customers?email=${customerEmail}`, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("User Data:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error geting user data:", error);
  }
};
