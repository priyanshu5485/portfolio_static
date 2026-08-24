import "./globals.css";

export const metadata = {
  title: "Kumar Priyanshu | Senior Data Engineer",
  description: "Senior Data Engineer portfolio — data pipelines, distributed processing and cloud data platforms."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
