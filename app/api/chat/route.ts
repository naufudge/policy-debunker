import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const api_url = "https://sdata.wheredoc.org/policy/chat"

        const response = await axios.post(api_url, reqBody)

        return NextResponse.json(response.data)

    } catch (error: unknown) {
        let errorMessage = ""
        if (error instanceof Error) {
            errorMessage = error.message
        } else {
            errorMessage = "An unkonown error occurred."
        }

        return NextResponse.json({
            error: errorMessage
        })
    }
}