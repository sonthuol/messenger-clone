import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

import { NextResponse } from "next/server";

/**
 * Account register function.
 *
 * @param request request info from the form
 * @returns Newly registered user information
 */
export async function POST(request: Request) {
  try {
    // Implement get info from form
    const body = await request.json();

    // Get the infor need to register
    const { name, email, password } = body;

    // Check the required register info
    // If there is not enough info,
    // The response will return to status 400 and the message "Missing infd"
    if (!name || !email || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    // Perform password hashing
    const hashedPassword = await bcrypt.hash(password, 12);

    // If have enough info is register
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
