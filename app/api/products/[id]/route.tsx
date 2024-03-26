import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(
    { id: "1", name: "Milk", price: 23 },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(
    { id: "1", name: body.name, price: body.price },
    { status: 201 }
  );
}

export function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ message: "Success delete" }, { status: 200 });
}
