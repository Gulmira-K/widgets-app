import React, { useEffect } from 'react'
import axios from 'axios'

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: text,
        target: language.value,
        key: KEY,
      }
    })

  }, [language, text])

  return (
    <div>
      
    </div>
  )
}

export default Convert
