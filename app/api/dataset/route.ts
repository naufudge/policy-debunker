// import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        // const response = await axios.get("https://sdata.wheredoc.org/policy/file")
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