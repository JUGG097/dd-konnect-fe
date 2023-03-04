import { FC } from 'react'
import Heading from '../components/Heading'

const Home: FC = () => {
  return (
    <div>
      <Heading
        as="h1"
        text="A place where designers meet developers"
        styles="text-center w-2/5 m-auto text-teal-green pt-8"
      />
      <Heading
        text="Have access to more than a million designs and work at your own pace"
        styles="text-teal-green text-center font-semibold text-2xl py-4"
      />
    </div>
  )
}

export default Home
