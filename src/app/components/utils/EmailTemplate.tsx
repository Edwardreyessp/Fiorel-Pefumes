interface EmailTemplateProps {
	firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstName,
}: EmailTemplateProps) => (
	<div>
		<h1>Welcome, {firstName}!</h1>
	</div>
);
