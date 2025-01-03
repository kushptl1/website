'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export default function About() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '🦇' },
                            { label: 'About' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    About
                </TextHeading>
					<Text variant="muted" size="xs" className="mb-8">Last updated: Jan 3, 2025</Text>
                <StackVertical gap="md">
                    <Text>
                    Hi! I am Kush. I am studying Cybersecurity.
                    </Text>
                    <Text>
                    I finished as a Information Systems undergraduate in 3 years and received a degree in it. 
                    I am currently pursuing my Master's in Cybersecurity. I am very passionate about Cybersecurity and am always looking to learn more about it.
                    </Text>
                    <Text>
                    I am currently serving as an IT Application Access Control Security Specialist at UMMS, where I am deeply committed to continuous learning and professional development. I am passionate about expanding my knowledge and expertise in the IT and security fields, always seeking opportunities to grow and take on new challenges. I have a love for reading and writing, exploring a wide range of topics that inspire me. Building meaningful connections with others is important to me, as I believe learning from diverse perspectives is key to both personal and professional growth.
                    </Text>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="red" />
        </BaseContainer>
    )
}

