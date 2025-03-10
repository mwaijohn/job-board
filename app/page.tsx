'use client'
import { JobList } from '@/components/JobList'
import { Layout } from '@/components/Layout'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Layout title='Home'>
        <JobList />
      </Layout>
    </>
  )
}
export default Home