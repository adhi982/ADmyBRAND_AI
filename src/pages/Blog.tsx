import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Spotlight } from "@/components/ui/spotlight";

const blogs = [
	{
		id: 1,
		title: "How AI is Transforming Marketing",
		description:
			"Discover how artificial intelligence is revolutionizing the way businesses approach marketing strategies.",
		image: "/src/assets/How AI is Transforming Marketing.png",
		date: "August 1, 2025",
	},
	{
		id: 2,
		title: "Top 5 AI Tools for Marketers",
		description:
			"Explore the top AI tools that are helping marketers achieve better results and save time.",
		image: "/src/assets/Top 5 AI Tools for Marketers.png",
		date: "July 25, 2025",
	},
	{
		id: 3,
		title: "The Future of AI in Advertising",
		description:
			"A deep dive into how AI is shaping the future of advertising and customer engagement.",
		image: "/src/assets/The Future of AI in Advertising.png",
		date: "July 15, 2025",
	},
	{
		id: 4,
		title: "AI-Powered Analytics: What You Need to Know",
		description:
			"Learn about the benefits of AI-powered analytics and how they can drive better decision-making.",
		image: "/src/assets/AI-Powered Analytics What You Need to Know.png",
		date: "July 5, 2025",
	},
];

const Blog = () => {
	const { theme } = useTheme();

	return (
		<div className="container mx-auto px-6 py-12 relative">
			{/* Full-page spotlight effect */}
			<Spotlight
				className="from-purple-400/30 via-purple-500/20 to-purple-600/10 dark:from-purple-300/40 dark:via-purple-400/30 dark:to-purple-500/20"
				size={300}
			/>
			
			<Navigation />
			<h1 className="text-4xl font-bold mb-8 text-gradient-primary">
				Our Blog
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogs.map((blog) => (
					<div
						key={blog.id}
						className="group glass-card p-6 rounded-lg hover-lift transition-all duration-300"
					>
						<img
							src={blog.image}
							alt={blog.title}
							className="w-full h-48 object-cover rounded-lg mb-4"
						/>
						<h2 className="text-xl font-semibold mb-2 group-hover:text-gradient-primary transition-all duration-300">
							{blog.title}
						</h2>
						<p className="text-muted-foreground mb-4">
							{blog.description}
						</p>
						<p className="text-sm text-muted-foreground">
							Published on {blog.date}
						</p>
						<Button variant="ghost" size="sm" className="mt-4">
							Read More
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
