import type { Route } from './+types/home';
import Navbar from '~/components/navbar';
import { resumes } from '../constants/index';
import ResumeCard from '~/components/resumeCard';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Resumind' },
		{ name: 'description', content: 'Smart feedback on your CV' },
	];
}

export default function Home() {
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
							<ResumeCard key={resume.id} resume={resume} />
						))}
					</div>
				)}
			</section>
		</main>
	);
}
