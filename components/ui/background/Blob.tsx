import React, { FC } from 'react'

interface Props {
  className?: string
}

export const Blob: FC<Props> = ({className}) => {
  return (
    <div className={`fixed ${className}`} />
  )
}
