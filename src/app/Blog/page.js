import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import Link from 'next/link'
import React from 'react'
const data = [
    {
        id: "Java",
        title:'Java: A Deep Dive into Its Core Features and Ecosystem',
        description:'Java is one of the most widely used programming languages, powering everything from enterprise applications to Android development...',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: "Javascript",
        title:'JavaScript: The Backbone of Modern Web Development',
        description:'JavaScript is the most widely used programming language for web development. From interactive UI components to full-stack applications...',
        image: 'https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764523_1280.jpg',
    },
    {
        id: "Tailwind CSS vs. Bootstrap",
        title:'Tailwind CSS vs. Bootstrap: Choosing the Right Framework for Your Project',
        description:'When it comes to front-end development, CSS frameworks can significantly speed up the design process. Two of the most popular frameworks are Tailwind CSS and Bootstrap...',
        image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: "Node.js and Express.js",
        title:'Understanding Node.js and Express.js: A Guide to Building Scalable Web Applications',
        description: 'In the realm of web development, two technologies have emerged as powerful tools for building scalable and efficient applications: Node.js and Express.js...',
        image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: "TypeScript",
        title: 'Understanding TypeScript: Enhancing JavaScript Development',
        description:'In the world of web development, JavaScript is the foundational language that powers dynamic websites and web applications...',
        image: 'https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829735_1280.jpg',
    },
    {
        id: "React.js",
        title: 'Exploring React.js: The Popular JavaScript Library for Building User Interfaces',
        description:'In the rapidly evolving world of web development, React.js has emerged as one of the most popular JavaScript libraries for building...',
        image: 'https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_1280.jpg',
    },
    {
        id: "Next.js",
        title: 'Understanding Next.js: The React Framework for Production-Ready Applications',
        description:'In the ever-evolving landscape of web development, developers are constantly seeking frameworks that enhance productivity and performance...',
        image:'https://img.icons8.com/?size=300&id=AU6Wc7r56Fxz&format=png&color=000000',
    },
    {
        id: "Authentication and Authorization",
        title:'Understanding User Authentication and Authorization: Key Concepts for Secure Applications',
        description: "In today's digital landscape, ensuring the security of user data and access control is paramount for any application. Two fundamental concepts that play...",
        image: 'https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_1280.jpg',
    },
]

const Blog = () => {
  return (
    <>
        <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 sm:py-24 lg:px-8'>
            <div className="flex">
                <div className="m-4 grid auto-rows-min gap-8 justify-between md:grid-cols-2 xl:grid-cols-3">
                    {data.map((blog, i) => (
                        <Link href={`/Blog/${blog.id}`} key={i}>
                            <ThreeDCardDemo key={i} {...blog}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog