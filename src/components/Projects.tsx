import { motion } from "motion/react";
import { ExternalLink, Figma } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import airJordanImage from 'figma:asset/c722b6019b8c02036ad98859dfb4309dfa23966e.png';
import payzzImage from 'figma:asset/38c2d3f88c78c37c7d885509b65463e40bafbf43.png';
import ninjaPizzaImage from 'figma:asset/d55936f2e9f4e685e28e172e11f8008111b8bd1c.png';

export function Projects() {
  const projects = [
    {
      title: "Ninja Pizza - Landing Page UI",
      description:
        "Designed a modern restaurant landing page in Figma with clean aesthetics, intuitive navigation, and responsive layouts for seamless user experience.",
      image: ninjaPizzaImage,
      tags: [
        "Figma",
        "UI Design",
        "Responsive Design",
        "Landing Page",
      ],
      link: "https://www.figma.com/proto/QlAcyTbd2ZA34OZVpz8tUK/pizza?page-id=0%3A1&node-id=7-8&p=f&viewport=872%2C642%2C0.13&t=UsoNKBsaZr07crYI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7%3A8",
      type: "design",
    },
    {
      title: "Payzz - Mobile Payment App UI",
      description:
        "Created a sleek banking app interface with multiple screens, focusing on user-friendly payment flows, security features, and modern mobile UI patterns.",
      image: payzzImage,
      tags: ["Figma", "Mobile UI", "UX Design", "Banking App"],
      link: "https://www.figma.com/proto/bxhPAs94zpW2hzO9j7kmeJ/payzz?page-id=0%3A1&node-id=1-982&p=f&viewport=334%2C171%2C0.6&t=GAiCy1LPVuR8SCHf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A982",
      type: "design",
    },
    {
      title: "Air Jordan 1 - Product Page UI",
      description:
        "Designed a sleek e-commerce product page for Air Jordan 1 sneakers featuring dynamic color selection, product details, and modern glassmorphism effects.",
      image: airJordanImage,
      tags: [
        "Figma",
        "Product Design",
        "E-commerce",
        "UI/UX",
      ],
      link: "https://www.figma.com/proto/3gq33ClYk0k2crJxyAXUQH/AIR-JORDAN-1?page-id=0%3A1&node-id=3-2&viewport=39%2C715%2C1&t=NjeCdejWoL85x6RH-1&scaling=min-zoom&content-scaling=fixed",
      type: "design",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my
            skills in both design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-900 dark:border-gray-700">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={
                      project.type === "design"
                        ? "default"
                        : "outline"
                    }
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.type === "design" ? (
                        <>
                          <Figma className="w-4 h-4 mr-2" />
                          View Design
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </>
                      )}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}