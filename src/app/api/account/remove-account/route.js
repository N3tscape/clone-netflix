import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(request) {
  try {
    await connectToDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Account ID is mandatory",
      });
    }

    const deleteAccount = await Account.findByIdAndDelete(id);

    if (deleteAccount) {
      return NextResponse.json({
        success: true,
        message: "Account deleted successfully",
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
