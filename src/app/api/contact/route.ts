import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactModel } from "@/models/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const contact = await ContactModel.create({
      name,
      email,
      phone,
      message,
    });

    console.log(' db con',contact);
    
    return NextResponse.json(
      { message: "Thanks for reaching out!", contactId: contact._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

