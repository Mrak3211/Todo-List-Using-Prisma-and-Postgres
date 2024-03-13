import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const res = await request.json();
    const { id } = res;
    const result = await prisma.todo.delete({
        where: { id: id }
    });
    return NextResponse.json(result);
}