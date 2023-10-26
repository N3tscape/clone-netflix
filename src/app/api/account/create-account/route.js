import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    await connectToDB();
    const { name, pin, uid } = await request.json();

    const isAccountAlreadyExists = await Account.find({ uid, name });
    const allAccounts = await Account.find({});

    if (isAccountAlreadyExists && isAccountAlreadyExists.length > 0) {
      return NextResponse.json({
        success: false,
        message: "This account already exists",
      });
    }

    if (allAccounts && allAccounts.length === 4) {
      return NextResponse.json({
        success: false,
        message: "You can't create more than 4 accounts",
      });
    }

    const hashPin = await hash(pin, 12);

    const newlyCreatedAccount = await Account.create({
      name,
      pin: hashPin,
      uid,
    });

    if (newlyCreatedAccount) {
      return NextResponse.json({
        success: true,
        message: "Account created successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went wrong",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something Went wrong",
    });
  }
}
