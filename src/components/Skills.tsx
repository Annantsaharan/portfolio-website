import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Award } from 'lucide-react';

export function Skills() {
  const technicalSkills = {
    'Frontend': ['HTML', 'CSS', 'Basic JavaScript', 'Responsive Web Design'],
    'Backend': ['C', 'Java', 'Basic AWS'],
    'Design': ['UI/UX Design (Figma)'],
    'Operating Systems': ['Linux'],
    'Frameworks': ['Familiar with Frameworks']
  };

  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      category: 'Cloud Computing'
      
    },
    {
      title: 'Linux Administration',
      issuer: 'NPTEL, IIT Kharagpur',
      category: 'System Administration'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL, IIT Kharagpur',
      category: 'Cloud Computing'
    },
    {
      title: 'Introduction to Cloud',
      issuer: 'E & ICT Academy, IIT Kanpur',
      category: 'Cloud Computing'
    },
    {
      title: 'Advance Computer Architecture',
      issuer: 'NPTEL, IIT Kharagpur',
      category: 'Computer Science'
    },
    {
      title: 'The Fundamentals of Digital Marketing',
      issuer: 'Google Digital Garage',
      category: 'Marketing'
    },
    {
      title: 'Cyber Security & Internet Safety',
      issuer: 'Rendezvous, IIT Delhi',
      category: 'Cybersecurity'
    },
    {
      title: 'Introduction to Internet of Things (IoT)',
      issuer: 'NPTEL, IIT Kharagpur',
      category: 'IoT'
    },
    {
      title: 'Career Management Essentials',
      issuer: 'IBM Skillsbuild',
      category: 'Professional Development'
    }
  ];

  const volunteering = {
    role: 'Captain - School Basketball Team',
    duration: '2018 - 2021',
    description: 'Led the school basketball team in inter-school competitions, organized practice sessions, mentored junior players, and built team cohesion.'
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="technical" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 dark:bg-gray-800">
            <TabsTrigger value="technical" className="dark:data-[state=active]:bg-gray-700">Technical Skills</TabsTrigger>
            <TabsTrigger value="certifications" className="dark:data-[state=active]:bg-gray-700">Certifications</TabsTrigger>
            <TabsTrigger value="leadership" className="dark:data-[state=active]:bg-gray-700">Leadership</TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="dark:bg-gray-800 dark:border-gray-700 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="mb-1 dark:text-white">{cert.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                          <Badge variant="outline" className="mt-2 text-xs dark:border-gray-600 dark:text-gray-400">
                            {cert.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leadership">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">{volunteering.role}</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{volunteering.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{volunteering.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
