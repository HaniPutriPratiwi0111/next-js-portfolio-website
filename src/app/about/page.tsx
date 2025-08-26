import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

const About = () => {
    return (
        <div className='container max-w-7xl mx-auto py-20'>
            <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>


            {/* bio section */}
            <section className='mb-16'>
                <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>Saya punya dasar di frontend dan backend, serta suka membuat tampilan web yang sederhana dan mudah digunakan, sekaligus mencoba membangun fungsi server yang cukup kuat.</p>
            </section>

            {/* skills section */}
            <section className='mb-16'>
                <h2 className='section-title'>Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaCode className='h-8 w-8 text-primary mb-4'/>
                        <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>React / Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>HTML / CSS</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
                        <h3 className='text-xl font-semibold mb-2'>Backend</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>PHP</li>
                            <li>Laravel</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
                        <h3 className='text-xl font-semibold mb-2'>Database</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>MySQL</li>
                            <li>SQLite</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
                        <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
                        <ul className='text-secondary space-y-2'>
                            <li>Git / GitHub</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* expriences section */}

            {/* <section className='mb-16'>
                <h2 className='section-title'>Projects / Portofolio</h2>

                <div className='max-w-3xl mx-auto space-y-8'>
                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>Web Portfolio – Next.js & Tailwind CSS</h3>
                        <p className='text-primary mb-2'>2025</p>
                        <ul className='text-secondary space-y-2 list-disc list-inside'>
                            <li>Membangun website portofolio pribadi dengan tampilan modern dan responsif.</li>
                            <li>Deploy menggunakan Vercel agar bisa diakses publik.</li>
                        </ul>
                    </div>

                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>E-Commerce Frontend – Next.js</h3>
                        <p className='text-primary mb-2'>2025</p>
                        <ul className='text-secondary space-y-2 list-disc list-inside'>
                            <li>Membuat tampilan frontend e-commerce dengan fitur keranjang belanja sederhana.</li>
                            <li>Menggunakan Next.js 15, Tailwind CSS, dan integrasi API mock.</li>
                        </ul>
                    </div>
                </div>
            </section> */}

            {/* contact section */}
            <section className='mb-16'>
                <h2 className='section-title'>Education</h2>

                <div className='max-w-3xl mx-auto space-y-8'>
                    <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-2'>D3 Manajemen Informatika</h3>
                        <p className='text-primary mb-2'>Politeknik Negeri Padang, Kampus Pelalawan . 2023 – 2026</p>
                        <p className='text-secondary'>Fokus pada pemrograman web, database, dan project berbasis IT (PBL).</p>
                    </div>

                    
                </div>
            </section>
        </div>
    )
}

export default About