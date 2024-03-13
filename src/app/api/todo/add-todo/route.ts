import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { text, completed } = res;
    const result = await prisma.todo.create({
        data: {
            text,
            completed,
            user: {
                connect: {
                    id: "1a6a86ab-cc46-43d4-a655-90cb111a9279"
                }
            }
        },
    });
    return NextResponse.json(result);
}