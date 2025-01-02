'use client'

import { motion } from 'framer-motion'
import { monoFont } from '@/styles/fonts/fonts'
import { cn } from '@/styles/lib/utils'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import Link from 'next/link'
import Image from 'next/image'
import Ruler from '../ruler/ruler'

export function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
        >
            {/* Content */}
            <div className="relative">
                <StackVertical gap="xs">
                    {/* Emoji with floating animation */}
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={cn("text-2xl sm:text-3xl md:text-4xl", monoFont.className)}
                    >
                        🦇
                    </motion.div>

                    {/* Name and title with staggered fade-in */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <TextHeading as="h1" className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Kush Patel
                        </TextHeading>
                    </motion.div>

                    {/* Introduction with staggered fade-in */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Text >
                            Hi! I am Kush.
                        </Text>

                        <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Text>
                                I am studying cyber security. I enjoy watching movies, embracing life, and learning new things.
                            </Text>
                            <Ruler color='colorless' marginTop='sm' marginBottom='none'/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                                <Text>
                                    This is my portfolio website showcasing my thoughts and ideas.
                                </Text>

                                <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                                <Text>
                                    Feel free to check out my{' '}
                                    <Link href="/blog" className="text-red-500 font-bold hover:underline">
                                        blog
                                    </Link>
                                    ; you can check it out if you're interested.
                                </Text>

                                <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                                <Text>
                                    I also document my weekly learnings. You can take a look at those{' '}
                                    <Link href="/learning" className="text-red-500 font-bold hover:underline">
                                        here
                                    </Link>
                                    .
                                </Text>
                                
                        </motion.div>
                    </motion.div>
                </StackVertical>
            </div>

            {/* Image section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 -mb-8"
            >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                        className="object-cover"
                        fill
                        src="/hiking-trip.png" 
                        alt="Hiking trip"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
} 