export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="overflow-hidden overscroll-none h-screen">{children}</div>;
}
