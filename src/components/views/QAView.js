import React, { useState } from 'react'
import InputBox from '../InputBox'

const QAView = props => {
  const [developerSelected, setDeveloperSelected] = useState(false)
  const [automatedSelected, setAutomatedSelected] = useState(true)

  return (
    <div className="View">
      <h2 className="ViewHeading">Quality Assurance Profile</h2>
      <InputBox
        name="Developer Testing"
        isSelected={developerSelected}
        setSelected={setDeveloperSelected}
        id="DevTesting"
        value={props.devTesting}
        setValue={props.setDevTesting}
        className="QABox"
        inputType="checkbox"
        text="One trend in software development is to assign test automation to the development team rather than a dedicated QA team. Variables including project scope and complexity can affect this decision."
      />
      <InputBox
        name="Automated QA"
        isSelected={automatedSelected}
        setSelected={setAutomatedSelected}
        id="AutomatedQA"
        value={props.automatedQA}
        setValue={props.setAutomatedQA}
        className="QABox"
        inputType="checkbox"
        text="Test automation is the use of software to test an application to ensure functionality. Automated QA can perform tests that are repetitive and expensive when performed manually. Third-party products such as ProdPerfect can assist in the creation and maintenance of these automated tests, allowing your development and quality assurance teams to focus on more dynamic areas of development."
      />
    </div>
  )
}

export default QAView
