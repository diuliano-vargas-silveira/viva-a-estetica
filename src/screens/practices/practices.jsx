import { useState } from "react";

import { Footer, Header } from "../../components";
import { GenderSelection, Objective, SECTIONS } from "./components";

import "./practices.css"

const CONTENT = {
  [SECTIONS.GENDER_SELECTION]: { title: "META E FOCO", component: (props) => <GenderSelection {...props} /> },
  [SECTIONS.PRACTICE_SELECTION]: { title: "OBJETIVO", component: (props) => <Objective {...props} /> },
  [SECTIONS.PRACTICE_SELECTED]: { title: "OBJETIVO", component: (props) => <Objective {...props} /> }
}

export function Practices() {
  const [sectionController, setSectionController] = useState(SECTIONS.GENDER_SELECTION)
  const [content,] = useState({ ...CONTENT })
  const [gender, setGender] = useState("")
  const [practiceType, setPracticeType] = useState("")

  function handleChangeGender(gender) {
    setGender(gender)
  }

  function handleChangeSection(section) {
    setSectionController(section)
  }

  function handleChangePracticeType(type) {
    setPracticeType(type)
  }

  const currentContent = content[sectionController]

  return <div className="container">
    <Header title={currentContent.title} />

    <main className='practices__main'>
      {currentContent.component({
        onChangeGender: handleChangeGender,
        onChangeSection: handleChangeSection,
        onChangePracticeType: handleChangePracticeType,
        practiceType,
        gender,
      })}
    </main>

    <Footer />
  </div>
}