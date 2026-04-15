
import { NextResponse } from "next/server";
import {supabase} from "/supabase.js";
  export async function GET() {
  const { data, error } = await supabase.from("users").select("*");
  return NextResponse.json(data);
}

console.log(L)
export async function POST(req) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("users")
    .insert([{ name: body.name, email: body.email }]);

  return NextResponse.json(data);
}
