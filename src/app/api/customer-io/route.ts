import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const SITE_ID = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CUSTOMER_IO_API_KEY;

  if (!SITE_ID || !API_KEY) {
    console.error("Customer.io SITE_ID and API_KEY must be set in environment variables");
    return;
  } else {
    console.log("Customer.io load");
  }

  const body = await request.json();
  const { metod, eventName, data } = body;

  const url =
    metod === "PUT"
      ? `https://track.customer.io/api/v1/customers/${data.email}`
      : `https://track.customer.io/api/v1/customers/${data.email}/events`;

  const bodyData = metod === "PUT" ? { ...data } : { name: eventName, data: data };

  const output = await fetch(url, {
    method: metod,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${SITE_ID}:${API_KEY}`)}`,
    },
    body: JSON.stringify(bodyData),
  })
    .then(response =>
      response
        .json()
        .then(data => ({ success: true, data: data }))
        .catch(() => {
          const error = {
            message: `/api/customer-io Metod: ${metod} request error: status: ${response.status}, statusText: ${response.statusText}`,
            url: url,
            payload: body,
          };
          return {
            success: false,
            data: [],
            error: error,
          };
        })
    )
    .catch(error => {
      return { success: false, data: [], error: error };
    });
  return NextResponse.json(output);
}
