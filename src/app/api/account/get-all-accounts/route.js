import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectToDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const getAllAccounts = await Account.find({ uid: id });

    if (getAllAccounts) {
      return NextResponse.json({
        success: true,
        data: getAllAccounts,
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
