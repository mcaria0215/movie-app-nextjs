// 1. 필요한 모듈 가져오기 (import)
import type { Metadata } from "next";

// 2. 메타데이터 설정 (SEO 정보)
export const metadata: Metadata = {
  title: "My Portfolio Project", // 브라우저 탭에 표시되는 제목
  description: "웹 퍼블리셔에서 프론트엔드 개발자로 성장하는 포트폴리오입니다.", // 검색 엔진 설명
};

// 3. RootLayout 컴포넌트 정의
// 이 함수가 전체 페이지의 기본 레이아웃을 정의합니다.
export default function RootLayout({
  children, // 모든 하위 페이지 컴포넌트가 여기에 들어옵니다.
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}