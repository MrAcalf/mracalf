"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ExternalLink, Cpu, Layout, Cloud } from "lucide-react";
import { profile } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="space-y-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="space-y-4">
          <Badge variant="outline" className="text-neutral-400 border-neutral-800">
            Disponível para novos projetos
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium">
            {profile.title}
          </p>
        </div>

        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
          {profile.pitch}
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href={`mailto:${profile.contacts.email}`}
            className={cn(buttonVariants(), "rounded-full px-8 h-12 bg-white text-black hover:bg-neutral-200")}
          >
            <Mail className="mr-2 h-4 w-4" /> Contato
          </a>
          <a 
            href={profile.contacts.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-8 h-12 border-neutral-800 hover:bg-neutral-900")}
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
          <div className="flex items-center gap-2 px-4 py-2 text-neutral-500">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{profile.location}</span>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Habilidades Técnicas</h2>
          <p className="text-neutral-500">Tecnologias e práticas que domino para construir soluções modernas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard 
            title="Front-end" 
            icon={<Layout className="h-5 w-5" />}
            skills={profile.skills.frontend} 
          />
          <SkillCard 
            title="Back-end & Cloud" 
            icon={<Cloud className="h-5 w-5" />}
            skills={profile.skills.backend} 
          />
          <SkillCard 
            title="Práticas" 
            icon={<Cpu className="h-5 w-5" />}
            skills={profile.skills.practices} 
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Experiência Profissional</h2>
          <p className="text-neutral-500">Minha jornada no desenvolvimento de software.</p>
        </div>

        <div className="space-y-8">
          {profile.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-neutral-800 pb-8 last:pb-0"
            >
              <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_white]" />
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-neutral-400">{exp.role}</p>
                  </div>
                  <Badge variant="secondary" className="bg-neutral-900 border-neutral-800 text-neutral-400">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-neutral-500 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 border-t border-neutral-900 flex flex-wrap justify-between gap-8 text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href={profile.contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            GitHub <ExternalLink className="h-3 w-3" />
          </a>
          <a href={profile.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            LinkedIn <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>
    </main>
  );
}

function SkillCard({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactNode }) {
  return (
    <Card className="bg-neutral-950/50 border-neutral-900 backdrop-blur-sm hover:border-neutral-800 transition-colors">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        {icon}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:text-white transition-colors">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
