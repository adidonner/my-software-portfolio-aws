"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Component() {
  type Project = {
  title: string;
  description: string;
  link: string;
  };
  
  const projects = [
    {
      title: "Safety awareness Application Project Plan",
      description:
        "Manof is a project management plan for a safety awareness application, offering a full presentation of its features and benefits.",
      link: "https://manap.s3.il-central-1.amazonaws.com/index.html",
    },
    {
      title: "The Complete Socks Guide",
      description:
        "A detailed guide covering all aspects of socks including care instructions, styling tips, and buying recommendations.",
      link: "https://v0-sock-website-requirements.vercel.app/",
    },
    {
      title: "News Website",
      description:
        "A comprehensive news blog starter kit with modern design and functionality for content management and reader engagement.",
      link: "https://blog-starter-kit-mauve-nu.vercel.app/",
    },
    {
      title: "English Grammar Practice Site",
      description:
        "An interactive platform for practicing English grammar with exercises, quizzes, and progress tracking features.",
      link: "https://v0-v0-dev-english-tracker.vercel.app/",
    },
    {
      title: "A Radio WebSite",
      description:
        "The website belongs to Shmuel, who enjoys radio and shares his passion with friends, featuring links to various radio stations and a personal blog.",
      link: "https://radio-station-spanish.s3.il-central-1.amazonaws.com/index.html",
    },
    // {
    //   title: "Socks Encyclopedia",
    //   description:
    //     "An encyclopedic website dedicated to socks, featuring comprehensive information about different types, materials, and history.",
    //   link: "https://v0-sock-website-guide.vercel.app/",
    // },
    {
      // title: "A  Exercise Program for beginners",
      title: "Running Program for Beginners",
      description:
        "Simple and Consistent Running Training Plan: From Zero to 5K in Six Weeks.",
      // link: "https://running-plan.w3spaces.com/",
      link: "https://running-program-for-beginners.s3.il-central-1.amazonaws.com/index.html",
    },
    {
      title: "A coupon website",
      description:
        "John Bryce's final course Full Stack project. A coupon mangment website with administration/ company/ customer buisness logic",
      link: "https://next-js-q23h.vercel.app/home",
    },
    // {
    //   title: "Save Big with the Best Coupons",
    //   description:
    //     "An upgrade to the coupon website using Next.js app router technology with v0 AI",
    //   link: "https://v0-coupons-web3-backend-setup.vercel.app/",
    // },
  ]

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                My Software Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Showcasing my work as a software developer
              </p>
            </div>
            <Button onClick={scrollToProjects} size="lg" className="mt-6">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A collection of web applications and tools I've built
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Visit Project
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
