import type { Route } from './+types/home';
import Navbar from '~/components/navbar';
import { resumes } from '../constants/index';
import ResumeCard from '~/components/resumeCard';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Resumind' },
		{ name: 'description', content: 'Smart feedback on your CV' },
	];
}

export default function Home() {
	const { isLoading, auth } = usePuterStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isAuthenticated) navigate('/auth?next=/');
	}, [auth.isAuthenticated]);

	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover">
			<Navbar />
			<section className='main-section'>
				<div className='page-heading pt-16'>
					<h1>Track your Application & resume Rating </h1>
					<h2>Review your submissions and check AI-powered feedback.</h2>
				</div>

				{resumes.length > 0 && (
					<div className='resumes-section'>
						{resumes.map((resume) => (
							<ResumeCard key={resume.id} resumes={resume} />
						))}
					</div>
				)}
			</section>
		</main>
	);
}
