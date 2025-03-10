// pages/index.tsx
import { Layout } from '@/components/Layout'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Layout title='Home'>
        <h2>Home</h2>
        <p>Welcome to the job board!</p>
      </Layout>
    </>
  )
}
export default Home