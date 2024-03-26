import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {
            "id": 1,
            "name": "Milk",
            "price": 1.6
        },
        {
            "id": 2,
            "name": "Bread",
            "price": 3
        }
    ])
}

