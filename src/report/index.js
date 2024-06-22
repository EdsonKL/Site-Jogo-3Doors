import express from "express";
import { Resend } from "resend";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

// instancia da lib de envio de email
// deve-se criar uma variavel de ambiente para o código
const resend = new Resend("re_W6dRGecd_FTxUfyaNXZZ2w6dWZC1LToVz");

app.post("/sendmail", async (req, res) => {
  const { email, message } = req.body;
  const { data, error } = await resend.emails.send({
    from: "3DOORS <onboarding@resend.dev>",
    to: ["3doors.suporte@gmail.com"],
    subject: "Report",
    html: `
    E-mail: ${email} <br>
    Report: ${message}
    `,
  });
  if (error) {
    return res.status(400).json({ error });
  }
  res.status(200);
});

// criação server
app.listen(3000);
