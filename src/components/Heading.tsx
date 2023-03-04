import React from 'react'

// the interface needs to explicitly declare which strings are safe to pass
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  text: string
  styles: string
}

const headingStyles = (as: string) => {
  switch (as) {
    case (as = 'h1'):
      return 'text-5xl font-semibold'
    case (as = 'h2'):
      return 'text-4xl font-semibold'
    case (as = 'h3'):
      return 'text-3xl font-semibold'
    case (as = 'h4'):
      return 'text-2xl font-semibold'
    case (as = 'h5'):
      return 'text-xl font-semibold'
    case (as = 'h6'):
      return 'text-lg font-semibold'
    default:
      return 'text-lg'
  }
}

const TsHeading: React.FC<HeadingProps> = ({ as = 'p', text, styles }) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, text)

  return <Heading className={`${styles} ${headingStyles(as)}`}>{text}</Heading>
}

export default TsHeading
