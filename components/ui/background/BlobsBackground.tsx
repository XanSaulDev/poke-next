import React from 'react'
import { Blob } from './Blob'
import { useTheme } from 'next-themes'

export const BlobsBackground = () => {
const { theme } = useTheme()
  return (
    <>
        {
            theme == 'dark' ? (
                <>
                    <Blob className="blob-one opacity-20 top-32"  />
                    <Blob className="blob-one opacity-30"  />
                    <Blob className="blob-one opacity-30 top-24 left-32"  />
                    <Blob className="blob-one opacity-25 left-56 top-44"  />
                    <Blob className="blob-second opacity-30 bottom-5 right-56"  />
                    <Blob className="blob-third opacity-20 bottom-0 right-0"  />
                    <Blob className="blob-third opacity-20 top-0 right-36"  />

                </>
            )
            : null
        }
    </>
  )
}
