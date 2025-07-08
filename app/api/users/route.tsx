import sql from "@/lib/db";

export async function GET() {
    try {
        const users = await sql`SELECT * FROM users`;
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}