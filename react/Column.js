import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['column']

const Column = ({ children }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return <div className={`${handles.column} flex items-center`}>{children}</div>
}

export default Column
