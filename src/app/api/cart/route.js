import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const apiRes = await fetch(
      `https://big-steppers.manufacs.com/wp-json/wc/store/v1/cart`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // cache: "no-store",
      }
    );
    const data = await apiRes.json();

    return NextResponse.json(data, {
      headers: {
        "Cart-Token": apiRes.headers.get("Cart-Token"),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
