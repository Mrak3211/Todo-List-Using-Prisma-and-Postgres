import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const result = await prisma.todo.findMany();
    return NextResponse.json(result);
}