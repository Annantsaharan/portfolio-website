import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with modern technologies.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive interfaces with Figma and user-centered design principles.'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks to deliver quality results.'
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Experience leading teams and mentoring junior members through various projects.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMzIwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a Web Developer and UI/UX Designer passionate about creating clean, responsive, and user-friendly 
              websites. Currently pursuing my Bachelor of Computer Applications (Cloud & Cyber Security) at IIMT University, 
              Meerut, I combine academic knowledge with practical experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I enjoy designing seamless interfaces, exploring new technologies like cloud computing and cybersecurity, 
              and tackling challenges that build creative and impactful digital experiences. My coursework includes 
              Web Development Fundamentals, JavaScript, Cloud Computing, and Ethical Hacking.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I recently completed an internship at Acmegrade where I demonstrated strong technical skills in 
              problem-solving, commitment to learning, and gained practical experience in front-end and back-end 
              technologies through real-world projects.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="mb-2 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
