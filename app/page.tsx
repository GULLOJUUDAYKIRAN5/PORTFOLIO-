"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import {
  Leaf,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase,
  ChevronDown,
  Star,
  TreePine,
  Flower2,
  Wind,
  Sun,
  Cloud,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const leafFallAnimation = {
  animate: {
    y: [0, 100],
    x: [-10, 10, -5, 15, 0],
    rotate: [0, 180, 360],
    opacity: [1, 0.8, 0],
    transition: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const windAnimation = {
  animate: {
    x: [-20, 20, -20],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const butterflyAnimation = {
  animate: {
    x: [0, 50, 100, 150, 200, 150, 100, 50, 0],
    y: [0, -20, 10, -30, 5, -15, 20, -10, 0],
    rotate: [0, 10, -10, 15, -5, 10, -15, 5, 0],
    transition: {
      duration: 12,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const sparkleAnimation = {
  animate: {
    scale: [0, 1, 0],
    rotate: [0, 180, 360],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const skills = {
    languages: ["C", "Python", "Java", "SQL", "JavaScript", "HTML", "CSS"],
    frameworks: ["Node.js", "Flask (API)", "Django"],
    tools: ["Git", "VS Code", "Google Colab"],
    libraries: ["pandas", "NumPy", "Matplotlib", "TensorFlow"],
    cloud: ["AWS"],
    foundational: [
      "Data Structures and Algorithms",
      "Artificial Intelligence",
      "Computer Networks",
      "Operating Systems",
    ],
  }

  const leetcodeStats = {
    totalSolved: 207,
    totalProblems: 3617,
    rank: "626,651",
    submissions: 796,
    easy: { solved: 117, total: 885 },
    medium: { solved: 87, total: 1881 },
    hard: { solved: 3, total: 851 },
    languages: [
      { name: "Python", problems: 117 },
      { name: "Python3", problems: 89 },
      { name: "C", problems: 4 },
    ],
    skills: [
      { name: "Backtracking", level: "Advanced", count: 11 },
      { name: "Dynamic Programming", level: "Advanced", count: 9 },
      { name: "Divide and Conquer", level: "Advanced", count: 5 },
      { name: "Hash Table", level: "Intermediate", count: 48 },
      { name: "Math", level: "Intermediate", count: 39 },
    ],
    recentProblems: [
      "First Missing Positive",
      "Subarray Sum Equals K",
      "Range Sum Query - Immutable",
      "Lexicographical Numbers",
      "Increasing Triplet Subsequence",
    ],
    badges: ["50 Days Badge 2025"],
  }

  const projects = [
    {
      title: "Smart Surplus Food Distribution System",
      tech: "HTML, CSS, JavaScript",
      period: "Aug 2024 – Present",
      description:
        "Developed a dynamic, responsive frontend web application for efficient surplus food distribution across hostels, restaurants, and orphanages.",
      highlights: [
        "Real-time listing and tracking of food quantities",
        "Clean, intuitive UI for reducing food waste",
        "Centralized request-based interface",
        "Local storage and JavaScript logic for distribution prioritization",
      ],
    },
    {
      title: "Health Cost Prediction for Cancer",
      tech: "Python, Machine Learning",
      period: "May 2024",
      description: "Built a regression model to predict cancer-related healthcare costs based on medical attributes.",
      highlights: [
        "Performed EDA using Pandas, Seaborn, and Matplotlib",
        "Applied one-hot encoding and scaling",
        "Achieved R² score of 0.85 with Linear Regression",
        "Clear visuals and documented codebase",
      ],
    },
    {
      title: "Website Access Blocker Application",
      tech: "Python, Flask, Windows Firewall, Linux iptables",
      period: "Apr 2025",
      description: "Created a Flask web app to manage domain/IP blocking via OS-level firewall rules.",
      highlights: [
        "Dynamic domain resolution support",
        "Cross-platform compatibility (Linux & Windows)",
        "JSON-based lightweight database",
        "Future enhancements planned for authentication and scheduling",
      ],
    },
  ]

  const certifications = [
    "Data Structures - In-Depth Training",
    "Linux Fundamentals - Coursera Specialization",
    "Computer Networks - Coursera Verified",
    "AWS Cloud Practitioner Foundations",
    "MongoDB Basics - NoSQL Certification",
    "Theory of Computation",
  ]

  // Generate random particles
  const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 5,
    }))
  }

  const particles = generateParticles(20)

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Leaves */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute text-green-200 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={leafFallAnimation}
            animate="animate"
            transition={{
              delay: i * 2,
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Leaf size={20 + Math.random() * 20} />
          </motion.div>
        ))}

        {/* Wind Effects */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`wind-${i}`}
            className="absolute text-blue-200 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            variants={windAnimation}
            animate="animate"
            transition={{
              delay: i * 1.5,
              duration: 6 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Wind size={30 + Math.random() * 10} />
          </motion.div>
        ))}

        {/* Floating Trees */}
        <motion.div className="absolute top-20 right-20 text-emerald-200" {...floatingAnimation}>
          <TreePine size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-green-300"
          {...floatingAnimation}
          transition={{ delay: 1, duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <TreePine size={45} />
        </motion.div>

        {/* Butterfly Animation */}
        <motion.div
          className="absolute top-1/3 left-10 text-yellow-400 opacity-80"
          variants={butterflyAnimation}
          animate="animate"
        >
          <Flower2 size={25} />
        </motion.div>

        {/* Sparkles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={sparkleAnimation}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 2 + Math.random(),
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Sparkles size={8 + Math.random() * 8} />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [-10, 10, -10],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Enhanced Parallax Mouse Effect */}
        <motion.div
          className="absolute w-3 h-3 bg-green-400 rounded-full opacity-60 blur-sm"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-40 blur-sm"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", stiffness: 30 }}
        />
        <motion.div
          className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
          animate={{
            x: mousePosition.x * 0.08,
            y: mousePosition.y * 0.08,
          }}
          transition={{ type: "spring", stiffness: 20 }}
        />

        {/* Clouds */}
        <motion.div
          className="absolute top-10 left-1/4 text-gray-200 opacity-50"
          animate={{
            x: [-20, 20, -20],
            transition: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Cloud size={80} />
        </motion.div>
        <motion.div
          className="absolute top-16 right-1/3 text-gray-200 opacity-40"
          animate={{
            x: [20, -20, 20],
            transition: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Cloud size={60} />
        </motion.div>

        {/* Sun */}
        <motion.div
          className="absolute top-8 right-8 text-yellow-300 opacity-70"
          animate={{
            rotate: 360,
            transition: {
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        >
          <Sun size={50} />
        </motion.div>
      </div>

      {/* Enhanced Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Leaf className="text-green-600" size={24} />
              </motion.div>
              <span className="font-bold text-xl text-gray-800">Uday Kiran</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "LeetCode", "Education", "Projects", "Achievements", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-green-600 transition-colors relative"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20"
          style={{ y: backgroundY }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-green-400 relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/images/uday-profile.jpg" alt="Gulloju Uday Kiran" fill className="object-cover" priority />
              <motion.div
                className="absolute inset-0 bg-green-400/20"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: textY }}
          >
            GULLOJU{" "}
            <motion.span
              className="text-green-600"
              animate={{
                textShadow: ["0 0 0px #10b981", "0 0 20px #10b981", "0 0 0px #10b981"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              UDAY KIRAN
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Computer Science Student & </span>
            <motion.span
              className="text-green-600 font-semibold"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Aspiring Software Developer
            </motion.span>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-green-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} className="mr-2" />
                +91 9959868138
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-green-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} className="mr-2" />
                udaykiran83358@gmail.com
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/gulloju-uday-kiran-656571285/",
                label: "LinkedIn",
                color: "hover:bg-blue-600",
              },
              {
                icon: Github,
                href: "https://github.com/udaykiran83358gmailcom/",
                label: "GitHub",
                color: "hover:bg-gray-800",
              },
              { icon: ExternalLink, href: "#", label: "Portfolio", color: "hover:bg-purple-600" },
              {
                icon: Code,
                href: "https://leetcode.com/u/gullojuudaykiran/",
                label: "LeetCode",
                color: "hover:bg-orange-600",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white rounded-full shadow-lg text-green-600 hover:text-white ${social.color} transition-all duration-300`}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-16"
            animate={{
              y: [0, 10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown size={32} className="text-green-600 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Enhanced About & Skills Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-800 mb-4"
              whileInView={{
                backgroundImage: [
                  "linear-gradient(45deg, #10b981, #059669)",
                  "linear-gradient(45deg, #059669, #047857)",
                  "linear-gradient(45deg, #10b981, #059669)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Passionate Computer Science student with strong problem-solving skills and expertise in Data Structures &
              Algorithms. Looking for Software Development Engineer roles to contribute to innovative projects.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-green-700 capitalize flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Code size={20} className="mr-2" />
                      </motion.div>
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 hover:bg-green-200 transition-all duration-200 cursor-pointer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LeetCode Achievements Section */}
      <section id="leetcode" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Coding Achievements</h2>
            <p className="text-xl text-gray-600">LeetCode Problem Solving Journey</p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <motion.div
                    className="text-3xl font-bold text-green-600 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {leetcodeStats.totalSolved}
                  </motion.div>
                  <p className="text-gray-600">Problems Solved</p>
                  <p className="text-sm text-gray-500">out of {leetcodeStats.totalProblems.toLocaleString()}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <motion.div
                    className="text-3xl font-bold text-blue-600 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    {leetcodeStats.rank}
                  </motion.div>
                  <p className="text-gray-600">Global Rank</p>
                  <p className="text-sm text-gray-500">Worldwide</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <motion.div
                    className="text-3xl font-bold text-purple-600 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    {leetcodeStats.submissions}
                  </motion.div>
                  <p className="text-gray-600">Submissions</p>
                  <p className="text-sm text-gray-500">Past Year</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <motion.div className="flex justify-center mb-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Code size={32} className="text-orange-600" />
                    </motion.div>
                  </motion.div>
                  <p className="text-gray-600">Active Coder</p>
                  <p className="text-sm text-gray-500">Daily Practice</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Problem Difficulty Breakdown */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center justify-between">
                    <span>Easy Problems</span>
                    <Badge className="bg-green-100 text-green-800">
                      {leetcodeStats.easy.solved}/{leetcodeStats.easy.total}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="bg-green-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {Math.round((leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100)}% Complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-yellow-600 flex items-center justify-between">
                    <span>Medium Problems</span>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      {leetcodeStats.medium.solved}/{leetcodeStats.medium.total}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="bg-yellow-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {Math.round((leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100)}% Complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center justify-between">
                    <span>Hard Problems</span>
                    <Badge className="bg-red-100 text-red-800">
                      {leetcodeStats.hard.solved}/{leetcodeStats.hard.total}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="bg-red-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {Math.round((leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100)}% Complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Languages and Skills */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Code size={20} className="mr-2" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leetcodeStats.languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="font-medium text-gray-700">{lang.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-green-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(lang.problems / leetcodeStats.languages[0].problems) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">{lang.problems}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Star size={20} className="mr-2" />
                    Algorithm Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leetcodeStats.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <Badge
                            variant="outline"
                            className={`ml-2 text-xs ${
                              skill.level === "Advanced"
                                ? "border-purple-600 text-purple-600"
                                : "border-blue-600 text-blue-600"
                            }`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-600">+{skill.count}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <Sparkles size={20} className="mr-2" />
                  Recent Problem Solving Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {leetcodeStats.recentProblems.map((problem, index) => (
                    <motion.div
                      key={problem}
                      className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Star size={16} className="text-green-500" />
                      </motion.div>
                      <span className="text-sm text-gray-700">{problem}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Badge Display */}
                <div className="mt-6 pt-6 border-t border-green-100">
                  <h4 className="font-semibold text-gray-700 mb-3">Latest Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {leetcodeStats.badges.map((badge, index) => (
                      <motion.div
                        key={badge}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1">
                          🏆 {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-700 flex items-center">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <BookOpen size={20} className="mr-2" />
                        </motion.div>
                        Bachelor of Technology in Computer Science
                      </CardTitle>
                      <CardDescription className="text-lg">SR University, Warangal, Telangana</CardDescription>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        Oct 2022 – Present
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-700 flex items-center">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                        >
                          <BookOpen size={20} className="mr-2" />
                        </motion.div>
                        MPC Intermediate
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Narayana Junior College, Hyderabad, Telangana
                      </CardDescription>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        Jun 2020 – Jun 2022
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-white/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">Innovative solutions built with passion</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className="h-full"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Briefcase size={20} className="text-green-600" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Badge variant="outline" className="border-green-600 text-green-600 text-xs">
                          {project.period}
                        </Badge>
                      </motion.div>
                    </div>
                    <CardTitle className="text-green-700 text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">{project.tech}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          className="text-sm text-gray-600 flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: highlightIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Star size={12} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          </motion.div>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Achievements & Certifications */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Certifications</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Award size={20} className="mr-2" />
                    </motion.div>
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Award size={16} className="text-green-500 mt-1" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800">AD-War Campaign Winner</h4>
                      <p className="text-gray-600">
                        Led and won an ad design competition, showcasing strong creative and leadership skills.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      <BookOpen size={20} className="mr-2" />
                    </motion.div>
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: index * 0.2,
                          }}
                        >
                          <Star size={14} className="text-green-500" />
                        </motion.div>
                        <span className="text-gray-700">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #059669 0%, transparent 50%)",
              "radial-gradient(circle at 40% 50%, #047857 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-8"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 0px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="text-xl mb-12 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to contribute to innovative projects and grow as a Software Developer
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:+919959868138"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone size={20} />
                </motion.div>
                <span>+91 9959868138</span>
              </motion.a>

              <motion.a
                href="mailto:udaykiran83358@gmail.com"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  <Mail size={20} />
                </motion.div>
                <span>udaykiran83358@gmail.com</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Leaf className="text-green-400" size={20} />
          </motion.div>
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            © 2024 Gulloju Uday Kiran. Crafted with nature's inspiration.
          </motion.span>
        </motion.div>
      </footer>
    </div>
  )
}
