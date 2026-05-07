import { Code2, Brain, Users, Trophy } from "lucide-react";

const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building end-to-end applications using React, Node.js, and modern web technologies.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Developing intelligent features using data, APIs, and machine learning concepts.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working in fast-paced teams, communicating clearly, and shipping features that matter.",
    },
    {
      icon: Trophy,
      title: "Beer League All-Star",
      description:
        "Bringing elite-level effort, cement legs, and unmatched locker room presence.",
    },
  ];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="contianer mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-mdedium tracking-wider uppercase">About Me</span>
                    </div>
                
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        <span className="font-serif italic font-normal text-white"> From Kinesiology to Computer Science.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                        I started my academic journey in Kinesiology, driven by a lifelong passion for sports and performance. Growing up, I played AAA hockey, which taught me discipline, resilience, and how to perform under pressure, skills that continue to shape how I approach challenges today. While studying Kinesiology, I became increasingly interested in the systems and technology behind performance, which ultimately led me to explore computer science.
                        </p>
                        <p>
                        That curiosity turned into a full transition when I entered UBC’s Bachelor of Computer Science second degree program. Since then, I’ve immersed myself in building projects, participating in hackathons, and developing a strong foundation in full-stack development and machine learning. I enjoy the process of taking ideas from concept to implementation and constantly pushing myself to learn new technologies.
                        </p>
                        <p>
                        Even as I’ve shifted into tech, sports remain a huge part of who I am. I still love playing and staying active, and I’m especially interested in opportunities where I can combine both worlds, working in a technical role within a sports organization and contributing to the future of the industry.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                        I aim to build impactful, scalable software while continuously growing as an engineer, with a long-term goal of contributing to the sports technology space.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} 
                             className="glass p-6 rounded-2xl animate-fade-in"
                             style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
};