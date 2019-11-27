import React, { useState } from 'react'
import InputBox from '../InputBox'

const EngineerView = props => {
  const [engineersSelected, setEngineersSelected] = useState(true)
  const [linesOfCodeSelected, setLinesOfCodeSelected] = useState(false)
  const [durationSelected, setDurationSelected] = useState(false)
  const [defectsSelected, setDefectsSelected] = useState(false)

  return (
    <div className="View">
      <h2 className="ViewHeading">Development Team</h2>
      <InputBox
        id="Engineers"
        value={props.engineers}
        setValue={props.setEngineers}
        name="How many engineers are on the team?"
        isSelected={engineersSelected}
        setSelected={setEngineersSelected}
        className="EngineersBox"
        inputType="range"
        maxInput="20"
        minInput="1"
        text="The size of an engineering team is a reasonable indicator of the complexity of a project. More engineers working on a project translates to more logical lines of code (LLoCT) produced."
      />
      <InputBox
        id="LinesOfCode"
        value={props.linesOfCode}
        setValue={props.setLinesOfCode}
        name="How many lines of code does each engineer write per month?"
        isSelected={linesOfCodeSelected}
        setSelected={setLinesOfCodeSelected}
        className="EngineersBox"
        inputType="range"
        maxInput="1500"
        minInput="250"
        step="50"
        text="Another factor in determining the total cost incurred from bugs involves approximating the of lines of code the engineering team writes over a given period. Every new or updated line of code increases the likelihood of generating another bug.
        "
      />
      <InputBox
        id="Duration"
        value={props.duration}
        setValue={props.setDuration}
        name="How many months does a project take to complete?"
        isSelected={durationSelected}
        setSelected={setDurationSelected}
        className="EngineersBox"
        inputType="range"
        maxInput="12"
        minInput="1"
        step=".5"
        text="Project length can vary greatly. Enter the anticipated number of months in which a project will be coded. If the project is indefinite/ongoing (such as a team continually maintaining and expanding a core product) then enter 12 months to estimate your annual costs."
      />
      <InputBox
        id="Defects"
        value={props.defects}
        setValue={props.setDefects}
        name="Defects"
        isSelected={defectsSelected}
        setSelected={setDefectsSelected}
        subText="/ 1k LLoC"
        className="EngineersBox"
        inputType="range"
        maxInput="60"
        minInput="1"
        step="1"
        text="In one case study, Microsoft found that through the internal testing phase, approximate 10-20 defects (or bugs) are produced on average per every 1000 lines of code (LoC) (Moore 1992). This number can vary greatly depending on factors like the seniority of your software development team, and the methods that they employ. Based on this average, approximate how many defects per 1000 LoC your team might produce."
      />
    </div>
  )
}

export default EngineerView
