import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    const res = await request.json();
    const { id, completed } = res;
    const result = await prisma.todo.update({
        where: { id: id },
        data: { completed: completed },
    });
    return NextResponse.json(result);
}
