import { ReactNode } from "react"

export default function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return <section className="flex">{children}</section>
}
