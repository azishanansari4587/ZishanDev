"use client";;
import { Box } from "lucide-react";
import { IconUxCircle, IconDatabase, IconStackBackward, IconWindmill, IconGitMerge } from '@tabler/icons-react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Skills() {
  return (
    <div className="mx-auto  px-4 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-xl md:text-5xl mb-8 text-black text-center font-bold dark:text-white">Professional Skills</h2>
      <ul
        className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <GridItem
          icon={<IconUxCircle className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Frontend Development"
          content={`
            <ul class="list-disc pl-4"> 
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Next.js</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Responsive & Mobile-First Design</li>
            <li>UI/UX Optimization</li>
            </ul>`
          }
      />
      <GridItem
          icon={<IconStackBackward className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Backend Development"
          content={`
            <ul class="list-disc pl-4"> 
              <li>Node.js, Express.js</li>
              <li>Java (Spring Boot - basic knowledge)</li>
              <li>JDBC & Hibernate</li>
              <li>RESTful API Development</li>
              <li>Authentication & Authorization (JWT, OAuth)</li>
            </ul>`
          }
      />
      <GridItem
          icon={<IconDatabase className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Database Management"
          content={`
            <ul class="list-disc pl-4"> 
              <li>MySQL</li>
              <li>Firebase, MongoDB</li>
              <li>Database Design & Optimization</li>
              <li>Query Performance Tuning</li>
            </ul>`
          } 
      />
      <GridItem
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Full Stack & DevOps"
          content={`
            <ul class="list-disc pl-4"> 
              <li>API Integration & Server-Side Logic</li>
              <li>Docker</li>
              <li>Vercel, Hostinger Deployment</li>
              <li>CI/CD Pipelines</li>
            </ul>`}
      />
      <GridItem
          icon={<IconGitMerge className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Version Control & Tools"
          content={`
            <ul class="list-disc pl-4"> 
              <li>Git, GitHub</li>
              <li>Jira, Slack</li>
              <li>Agile & Scrum Methodologies</li>
              <li>Zustand, Redux (State Management)</li>
            </ul>`
          }
      />
      <GridItem
          icon={<IconWindmill className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Other Technical Skills"
          content={`
            <ul class="list-disc pl-4"> 
              <li>Problem Solving & Debugging</li>
              <li>Performance Optimization</li>
              <li>Web Security Best Practices</li>
              <li>System Design (Basic Understanding)</li>
            </ul>`
          }
      /> 
      </ul>
    </div>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  content
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            
            <div className="flex gap-2">
                <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                {icon}
                    
                </div>
                <h3
                    className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-lg/[1.875rem] text-balance text-black dark:text-white">
                    {title}
                </h3>
              
            </div>  
              <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400" dangerouslySetInnerHTML={{__html: content}}></div>

            
          </div>
        </div>
      </div>
    </li>
  );
};
