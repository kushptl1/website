'use client'

import { cn } from '@/styles/lib/utils'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'
import Link from 'next/link'

export function HomepageSocials() {
    return (
        <div>
            <TextHeading as="h2" weight="bold">Socials</TextHeading>
            <Text>
                I’m always open to chat! Please feel free to hit me up on{' '}
                <Link href="https://www.linkedin.com/in/kusptl/" className="text-red-500 hover:underline">Linkedin</Link>
                .
            </Text>
        </div>

    )
} 