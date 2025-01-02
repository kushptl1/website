import { motion } from 'framer-motion'
import { Code2, Brain, Sparkles, BookOpen, Divide, FileCode } from 'lucide-react'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import Text from '@/common-components/text/text'
import TextHeading from '../text-heading/text-heading'
import Link from 'next/link'

interface WorkItemProps {
    icon: React.ReactNode;
    text: string;
    delay: number;
    hyperlink?: string;
    hyperlinkText?: string;
    endText?: string;
}

function WorkItem({ icon, text, delay, hyperlink, hyperlinkText, endText }: WorkItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center gap-3"
        >
            <div className="text-purple-500">
                {icon}
            </div>
            <Text variant="muted" size="sm">
                {text}
                {hyperlink && hyperlinkText && (
                    <Link href={hyperlink} className="text-purple-500 hover:underline">
                        {hyperlinkText}
                    </Link>
                )}
                {endText && (
                    <span>{endText}</span>
                )}
            </Text>
        </motion.div>
    )
}

export function CurrentWork() {
    const items = [
        {
            icon: <Brain className="w-4 h-4" />,
            text: "Gaining a deeper understanding of IAM and access management practices."
        },
        {
            icon: <FileCode className="w-4 h-4" />,
            text: "Learning scripting languages like Python, Powershell and Bash for automation."
        },
        {
            icon: <Sparkles className="w-4 h-4" />,
            text: "Exploring the Future of Cybersecurity"
        },
        {
            icon: <BookOpen className="w-4 h-4" />,
            text: "Reading ",
            hyperlink: "/notes/books",
            hyperlinkText: "Books",
            endText: ""
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <StackVertical gap="none">
                <TextHeading as="h2">Current Projects</TextHeading>
                <StackVertical gap="md">
                    {items.map((item, index) => (
                        <WorkItem 
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            delay={1.2 + index * 0.1}
                            hyperlink={item.hyperlink}
                            hyperlinkText={item.hyperlinkText}
                            endText={item.endText}
                        />
                    ))}
                </StackVertical>
            </StackVertical>
        </motion.div>
    )
} 