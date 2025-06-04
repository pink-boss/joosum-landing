"use server";

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
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
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
        <p>이 메일은 Joosum 랜딩 페이지에서 자동으로 발송되었습니다.</p>
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
    // RESEND_API_KEY가 설정되어 있으면 실제 메일 전송
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // 이메일 HTML 생성
      const emailHtml = generateContactEmailHtml({
        email,
        subject,
        content,
        additionalInfo,
      });

      const { data, error } = await resend.emails.send({
        from: "noreply@joosum.com",
        to: ["pinkjoosum@gmail.com"],
        subject: `[Joosum 문의] ${subject}`,
        html: emailHtml,
        replyTo: email,
      });

      if (error) {
        console.error("메일 전송 실패:", error);
        return { error: "메일 전송 중 오류가 발생했습니다." };
      }

      console.log("메일 전송 성공:", data);
    } else {
      // API 키가 없을 때는 콘솔에 로그만 출력 (개발용)
      console.log("=== 문의 접수 (개발 모드) ===");
      console.log("이메일:", email);
      console.log("제목:", subject);
      console.log("내용:", content);
      if (additionalInfo) console.log("부가정보:", additionalInfo);
      console.log("접수 시간:", new Date().toLocaleString("ko-KR"));
      console.log(
        "RESEND_API_KEY가 설정되지 않아 실제 메일은 전송되지 않았습니다."
      );
      console.log("==========================");
    }

    // 제출 처리 시뮬레이션 (2초 지연)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { success: true };
  } catch (error) {
    console.error("문의 제출 중 예외 발생:", error);
    return { error: "문의 제출 중 오류가 발생했습니다." };
  }
}
