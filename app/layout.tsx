import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tinyleaders.ge"),
  title: "Tiny Leaders | საბავშვო ბაღი, სასკოლო მომზადება და თერაპიული მხარდაჭერა",
  description:
    "Tiny Leaders არის პრემიუმ საბავშვო ბაღი, დაწყებითი სკოლის მოსამზადებელი აკადემია, თერაპიული მხარდაჭერისა და შემოქმედებითი აქტივობების სივრცე თბილისში.",
  keywords: [
    "Tiny Leaders",
    "საათობრივი ზრუნვა",
    "მოქნილი ზრუნვის სერვისები",
    "დროებითი ზრუნვა",
    "ბავშვის მოვლა თბილისში",
    "საბავშვო ბაღი თბილისი",
    "დაწყებითი სკოლის მოსამზადებელი ცენტრი",
    "თერაპიული მხარდაჭერა ბავშვებისთვის",
    "ბავშვთა თერაპია თბილისი",
    "სასკოლო მზაობა",
    "ქართული ცეკვა ბავშვებისთვის",
    "ბავშვთა თეატრი",
    "საშინაო დავალების დახმარება",
  ],
  openGraph: {
    title: "Tiny Leaders | სწავლა, განვითარება, შემოქმედება, თერაპია და სასკოლო მომზადება",
    description:
      "ერთი სივრცე საბავშვო ბაღის პროგრამებისთვის, დაწყებითი სკოლის მოსამზადებლად, თერაპიული მხარდაჭერისთვის, შემოქმედებითი ხელოვნებისთვის და გარე სწავლებისთვის.",
    images: ["/images/tiny-leaders/hero-classroom.webp"],
    locale: "ka_GE",
    type: "website",
  },
  icons: {
    icon: "/tiny-leaders-logo.png",
    apple: "/tiny-leaders-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
