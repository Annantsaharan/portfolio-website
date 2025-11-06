import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Education() {
  const education = {
    degree: 'Bachelor of Computer Applications',
    specialization: 'Cloud & Cyber Security',
    institution: 'IIMT University, Meerut',
    duration: '2023 - 2026',
    location: 'Meerut',
    coursework: [
      'Web Development Fundamentals',
      'HTML, CSS, JavaScript',
      'Cloud Computing',
      'Virtualization',
      'Linux Administration',
      'Computer Networks',
      'Cybersecurity Basics',
      'Ethical Hacking'
    ]
  };

  const experience = {
    title: 'Intern Training Internship',
    company: 'Acmegrade',
    duration: '02/2025 - 03/2025',
    description: 'Successfully completed Web Development internship training, demonstrating strong technical skills, problem-solving ability, and commitment to learning. Gained practical experience in front-end and back-end technologies through real-world projects.'
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">Education & Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="dark:bg-gray-900 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="dark:text-white">{education.degree}</CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{education.specialization}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{education.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="mb-3 dark:text-white">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge key={index} variant="secondary" className="dark:bg-gray-800 dark:text-gray-300">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="dark:bg-gray-900 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="dark:text-white">{experience.title}</CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{experience.company}</p>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
