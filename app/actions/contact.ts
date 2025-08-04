"use server";

import nodemailer from "nodemailer";

// ContactEmailTemplate 로직을 순수 함수로 변환
function generateContactEmailHtml({
  email,
  subject,
  content,
  additionalInfo,
}: {
  email: string;
  subject: string;
  content: string;
  additionalInfo?: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
        새로운 문의가 접수되었습니다
      </h2>

      <div style="margin: 20px 0;">
        <h3 style="color: #555; margin-bottom: 10px;">문의자 정보</h3>
        <p><strong>이메일:</strong> ${email}</p>
      </div>

      <div style="margin: 20px 0;">
        <h3 style="color: #555; margin-bottom: 10px;">문의 제목</h3>
        <p>${subject}</p>
      </div>

      <div style="margin: 20px 0;">
        <h3 style="color: #555; margin-bottom: 10px;">문의 내용</h3>
        <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
          ${content}
        </div>
      </div>

      ${
        additionalInfo
          ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 10px;">부가 정보</h3>
          <p>${additionalInfo}</p>
        </div>
      `
          : ""
      }

      <div style="margin-top: 30px; padding: 10px; background-color: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
        <p>이 메일은 Joosum 문의하기 페이지에서 발송되었습니다.</p>
        <p>발송 시간: ${new Date().toLocaleString("ko-KR")}</p>
      </div>
    </div>
  `;
}

export interface FormState {
  success?: boolean;
  error?: string;
  errors?: {
    email?: string[];
    subject?: string[];
    content?: string[];
    privacy?: string[];
  };
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 폼 데이터 추출
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;
  const additionalInfo = formData.get("additionalInfo") as string;
  const privacy = formData.get("privacy") as string;

  // 유효성 검사
  const errors: FormState["errors"] = {};

  if (!email || !email.includes("@")) {
    errors.email = ["올바른 이메일 주소를 입력해주세요."];
  }

  if (!subject || subject.trim().length === 0) {
    errors.subject = ["제목을 입력해주세요."];
  }

  if (!content || content.trim().length === 0) {
    errors.content = ["문의내용을 입력해주세요."];
  }

  if (!privacy) {
    errors.privacy = ["개인정보 수집 및 이용에 동의해주세요."];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    throw new Error("test");
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
      // Gmail SMTP 설정
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // TLS 사용
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASS, // Gmail 앱 비밀번호
        },
      });

      // 이메일 HTML 생성
      const emailHtml = generateContactEmailHtml({
        email,
        subject,
        content,
        additionalInfo,
      });

      // 메일 옵션 설정
      const mailOptions = {
        from: `"Joosum 문의" <${process.env.GMAIL_USER}>`,
        to: "pinkjoosum@gmail.com",
        subject: `[Joosum 문의] ${subject}`,
        html: emailHtml,
        replyTo: email,
      };

      // 메일 전송
      const info = await transporter.sendMail(mailOptions);
      console.log("메일 전송 성공:", info.messageId);
    } else {
      // Gmail 설정이 없을 때는 콘솔에 로그만 출력 (개발용)
      console.log("=== 문의 접수 (개발 모드) ===");
      console.log("이메일:", email);
      console.log("제목:", subject);
      console.log("내용:", content);
      if (additionalInfo) console.log("부가정보:", additionalInfo);
      console.log("접수 시간:", new Date().toLocaleString("ko-KR"));
      console.log(
        "GMAIL_USER 또는 GMAIL_APP_PASS가 설정되지 않아 실제 메일은 전송되지 않았습니다."
      );
      console.log(
        "Gmail 앱 비밀번호 설정이 필요합니다: https://myaccount.google.com/apppasswords"
      );
      console.log("==========================");
    }

    // 제출 처리 시뮬레이션 (2초 지연)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { success: true };
  } catch (error) {
    console.error("문의 제출 중 예외 발생:", error);
    return {
      error:
        "문의 제출 중 오류가 발생했습니다. " +
        process.env.GMAIL_USER +
        " " +
        process.env.GMAIL_APP_PASS,
    };
  }
}
