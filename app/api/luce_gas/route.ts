import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
    try {
        const db = await pool.getConnection()
        const query = 'select * from luce_gas'
        const [rows] = await db.execute(query)
        db.release()
        
        return NextResponse.json(rows)
    } catch (error) {
        console.error("Error in GET request:", error);
        return NextResponse.json({
            error: "Internal server error"
        }, { status: 500 })
    }
}
