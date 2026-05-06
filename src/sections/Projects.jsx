import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import doingSquatImg from "@/assets/projects/doingsquat.png";
import vibeifyImg from "@/assets/projects/vibeify.png"
import robotImg from "@/assets/projects/robot.jpg"
import pathableImg from "@/assets/projects/pathable.png"
import insightImg from "@/assets/projects/insightubc.png"
import moodifyImg from "@/assets/projects/moodify.png"
import studyspotImg from "@/assets/projects/studyspot.png"

const projects = [
    {
      title: "InsightUBC",
      description:
        "A full-stack data analytics platform that allows users to upload, process, and query large academic datasets through a custom query language, providing insights into course performance and campus facilities. Built with a scalable Node.js and TypeScript backend featuring asynchronous ingestion, persistent storage, and a validated query DSL.",
      image: insightImg,
      tags: ["TypeScript", "Node.js", "HTML5", "CSS", "Chai"],
    },
    {
      title: "Doing Squat",
      description:
        "A mobile app that encourages productivity through fitness by rewarding users with app access time for completing physical activity challenges. Built with React Native (Expo) and integrated a machine learning model to estimate body movement using device motion data.",
      image: doingSquatImg,
      tags: ["React Native", "Expo", "Python", "Machine Learning"],
      github: "https://github.com/reeyawnn/nwhacks2026/tree/main",
    },
    {
      title: "Vibeify",
      description:
        "A full-stack application that generates personalized Spotify playlists based on user mood, genre, and era using AI-driven recommendations. Built an Express.js API pipeline integrating OpenAI and Spotify APIs with prompt engineering, output validation, and handling of deprecated endpoints.",
      image: vibeifyImg,
      tags: ["Express.js", "OpenAI API", "Spotify API", "JavaScript"],
      github: "https://github.com/woojavie/BCSHacks2025",
    },
    {
      title: "Pathable",
      description:
        "A hackathon project that generates accessible routes for wheelchair users using Google Maps APIs, elevation data, and real-time obstacle reporting. Leveraged modern AI development tools to rapidly prototype, deploy, and iterate in a fast-paced environment.",
      image: pathableImg,
      tags: ["Google Maps API", "Supabase", "Vercel", "Cursor", "Lovable"],
      link: "https://pathable.vercel.app/",
      github: "https://github.com/woojavie/mobility-paths-navigator",
    },
    {
      title: "Moodify",
      description:
        "A hackathon web app that helps psychiatrists track patient moods through daily journal entries. Contributed to front-end development using Bootstrap and integrated backend sentiment analysis via the API Ninjas Sentiment API.",
      image: moodifyImg,
      tags: ["JavaScript", "Bootstrap", "HTML5", "CSS", "Git"],
    },
    {
      title: "StudySpot",
      description:
        "A Java application that helps students discover and track ideal study locations, featuring both GUI and console interfaces with persistent data storage. Designed using MVC architecture, OOP principles, and modular design patterns.",
      image: studyspotImg,
      tags: ["Java", "JUnit", "JSwing", "JSON"],
      github: "https://github.com/woojavie/StudySpot",
    },
    {
      title: "Maze-Solving Robot",
      description:
        "An Arduino-based robot capable of navigating mazes using infrared sensors for line following and ultrasonic sensors for obstacle detection. Applied Bayesian filtering to reduce sensor noise and enable smooth transitions between navigation modes.",
      image: robotImg,
      tags: ["Arduino", "C++", "Sensors", "Embedded Systems"],
    },
  ];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to innovative tools that solve real-world problems
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} 
                             className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                             style={{ animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image}    
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div 
                                className="absolute inset-0
                                bg-gradient-to-t from-card via-card/50
                                to-transparent opacity-60"
                            />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                            <ArrowRight className="w-5 h-5"/>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                            <FaGithub className="w-5 h-5"/>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight 
                                        className="w-5 h-5
                                        text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View ALL Call to Actions */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton href="https://github.com/woojavie" target="_blank"
                                            rel="noopener noreferrer"
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    )
};