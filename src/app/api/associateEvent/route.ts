import { NextResponse, type NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  const SITE_ID = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CUSTOMER_IO_API_KEY;

  const body = await request.json();
  const { email } = body;

  const url = `https://track.customer.io/api/v1/customers/${email}`;

  const output = await fetch(url, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${SITE_ID}:${API_KEY}`)}`,
    },
    body: JSON.stringify(body),
  })
    .then(response =>
      response
        .json()
        .then(data => ({ success: true, data: data }))
        .catch(() => {
          const error = {
            message: `/api/associateEvent request error: status: ${response.status}, statusText: ${response.statusText}`,
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
