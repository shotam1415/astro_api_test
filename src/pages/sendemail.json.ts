export const prerender = true;

import type { APIRoute } from 'astro';
import nodemailer from "nodemailer";

export const GET: APIRoute = ({ params, request }) => {
    return new Response(JSON.stringify({
        message: "This was a GET!"
      })
    )
  }
  
  // export const POST: APIRoute = async({ request }) => {
  //   const body = await request.json()
  //   console.log(body)
  
  //   //管理者が受け取るメールの内容
  //   const toHostMailData = {
  //     from: "kamei+from@chanto.design",
  //     to: "kamei+to@chanto.design",
  //     subject: `[お問い合わせ]`,
  //     text: `
  //      以下のお問い合わせがありました:
  
  
  //      このメールはお問い合わせフォームから自動送信されました。
  //    `,
  //   };
  
  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: "kamei@chanto.design",
  //       pass: "oacn zret fbdl fxgx",
  //     }
  //   });
  
  //   transporter.sendMail(toHostMailData, function (error, info) {
  //     if (error) console.log(error);
  //     else console.log(info);
  //   });
  //   try {
  //     return new Response("メール送信成功", { status: 200 });
  //   } catch (error) {
  //     console.error("メール送信エラー:", error);
  //     return new Response("メール送信エラー", { status: 500 });
  //   }
  // }

  export const POST: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: "This was a POST!"
      })
    )
  }
  
  
  export const DELETE: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: "This was a DELETE!"
      })
    )
  }
  
  export const ALL: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: `This was a ${request.method}!`
      })
    )
  }