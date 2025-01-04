'use client'

import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"
import Text from "@/common-components/text/text"
import TextHeading from "@/common-components/text-heading/text-heading"
import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import { List, ListItem } from "@/common-components/list/list"
import Callout from "@/common-components/callout/callout"
import Ruler from "@/common-components/ruler/ruler"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Head from 'next/head'
import Image from 'next/image'

export default function MyCerts() {
  return (
    <>
      <Head>
        <title>My Certificates</title>
      </Head>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
                items={[
                    { href: '/', label: 'Home', emoji: '🦇' },
                    { href: '/blog', label: 'Blog' },
                    { label: 'My Certificates' }
                ]}
            />
            <ThemeToggle />
          </div>

          <article>
            <TextHeading as="h1">My Certificates</TextHeading>
            <Text variant="muted" size="xs" className="mb-8">January 3, 2025 | </Text>
            <StackVertical gap="md"> 
            <Text weight="bold">Here are some of the certificates I have earned:</Text>
            
              <List marker='decimal' spacing='relaxed'>
              <ListItem>CompTIA Security+ (SY0-701)
              <Image
                src="/Security_logo.png" // Replace with the path to your image
                alt="Security+ Logo" // Replace with a description of the image
                width={100} // Adjust the width as needed
                height={100} // Adjust the height as needed
                className="rounded-lg mb-8 mt-4" // Add any additional classes if needed
              />
              </ListItem>
              <ListItem>Azure Fundamentals (AZ-900)
              <Image
                src="/AZ900-logo.png" // Replace with the path to your image
                alt="AZ900 Logo" // Replace with a description of the image
                width={100} // Adjust the width as needed
                height={100} // Adjust the height as needed
                className="rounded-lg mb-8 mt-4" // Add any additional classes if needed
              />
              </ListItem>
              <ListItem>Intro to Splunk (2024)</ListItem>
              <ListItem>Mastercard - Cybersecurity Job Simulation on Forage</ListItem>
              {/* Add more certificates as needed */}
            </List>
            <Callout variant='green' title="Note"> 
            I believe in the power of collaboration and am always eager to connect with like-minded professionals. If you’d like to discuss technology, cybersecurity, or anything, feel free to reach out I’d love to hear from you!{' '} 
            <Link href="https://www.linkedin.com/in/kusptl/" className="text-red-500 hover:underline">Linkedin</Link>
</Callout>
            </StackVertical>
          </article>
        </StackVertical>
      </BaseContainer>
      <IndividualPageFooter />
    </>
  )
}