import { AdminNavbar } from '../components/molecules';

export default function layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return <AdminNavbar>{children}</AdminNavbar>;
}
