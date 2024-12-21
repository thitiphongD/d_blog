export default function BoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="px-4 md:px-10 flex-1">{children}</main>
    );
}
