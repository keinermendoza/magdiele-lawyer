import { NextResponse } from "next/server";
import { sendMessage } from "@/app/lib/services";

export async function GET(request) {
  
  return NextResponse.json({message: "This is a new API route"});
}

export async function POST(request, response) {
  const req = await request.json()
  try {
    const resp = await sendMessage(req)
    return NextResponse.json({message: "ok"}, {status:200})
  } catch(error) {
    return NextResponse.json({message:"error"}, {status:400})
  }

}
// export default function GET(req, res) {
//  res.status(200).json({ message: 'Hello from Next.js!' })