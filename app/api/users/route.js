import { supabase } from "@/app/lib/supabase";
import { NextResponse } from "next/server";
// testing webhook
export async function GET() {
  const { data, error } = await supabase.from("users").select("*");
  return NextResponse.json(data);
}
ff

console.log(x)
const bot = { }
cosole.log(bot.a)
export async function POST(req) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("users")
    .insert([{ name: body.name, email: body.email }]);

  return NextResponse.json(data);
}
