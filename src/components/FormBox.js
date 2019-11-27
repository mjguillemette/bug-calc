import React, { useEffect } from 'react'
import styled from 'styled-components'

const FormBox = styled.div`
  position: relative;
  max-width: 400px;
  font-size: 0.92em;
  border-radius: 14px;
  padding: 1.4em 1.4em 1em 1.4em;
  flex-direction: column;
  display: flex;
`
const FormHeading = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
`

export default props => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '4035749',
          formId: 'f1f66578-8671-49f3-834e-277f4c61434e',
          target: '#hubspotForm'
        })
      }
    })
  })

  return <FormBox id="hubspotForm" />
}
