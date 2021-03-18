import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import Card from 'components/Card'

const defaultEndpoint = 'http://swapi.dev/api/people/'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {

  const { next, results: defaultResults = [] } = data
  const [results, updateResults] = useState(defaultResults)
  const [page, updatePage] = useState({
    next,
    current: defaultEndpoint
  })

  const { current } = page

  useEffect(() => {
    if (current === defaultEndpoint) return;

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json()

      updatePage({
        current,
        ...nextData
      })

      if (!nextData?.previous) {
        updateResults(nextData.results)
        return
      }

      updateResults(previous => {
        return [
          ...previous,
          ...nextData.results
        ]
      })

    }
    request()
  }, [current])

  function handleLoadMore() {
    updatePage(previous => {
      return {
        ...previous,
        current: page.next
      }
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the dark side
        </h1>
        <section className={styles.section}>
          <div className="row row-cols-1 row-cols-md-4">
            {results.map((result, index) => {
              const { name, films, birth_year } = result
              return (
                <div key={index} className="col mb-4">
                  <Card name={name} films={films} birthYear={birth_year} id={index + 1} />
                </div>
              )
            })}
          </div>
        </section>
        <div className={styles.buttonWidth}>
          <button className='btn btn-info btn-lg ' onClick={handleLoadMore}>Load more</button>
        </div>
      </main>
    </div>
  )
}

