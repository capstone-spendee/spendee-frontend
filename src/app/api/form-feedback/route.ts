import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const { email, name, subject, feedback } = await req.json()
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_APP_EMAIL,
            pass: process.env.MY_APP_PASS,
        }
    })

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.MY_EMAIL_HOST,
            replyTo: email,
            subject: subject,
            text: feedback,
            html: `pesan dari ${name} yang berisi : <p>${feedback}</p>`
        })
        return NextResponse.json({ message: 'Feedback sent successfully' })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}