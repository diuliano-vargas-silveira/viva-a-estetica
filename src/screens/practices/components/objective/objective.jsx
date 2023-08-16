import { useEffect, useState } from "react"
import { GENDERS } from "../genders"
import { SECTIONS } from "../sections"
import { PRACTICE_TYPE } from "../practice-type"

import {
  iconIncreaseMuscleMan,
  iconIncreaseMuscleWoman,
  iconKeepConditionMan,
  iconKeepConditionWoman,
  iconWeightLossMan
} from "../../../../assets"

import "./objective.css"

const PRACTICE_TYPES_MAN = [
  { title: "PERDER PESO", img: iconWeightLossMan, alt: "Homem perdendo peso", type: PRACTICE_TYPE.WEIGHT_LOSS },
  { title: "GANHAR MASSA", img: iconIncreaseMuscleMan, alt: "Homem fazendo exercício", type: PRACTICE_TYPE.INCREASE_MUSCLE },
  { title: "MANTER FORMA", img: iconKeepConditionMan, alt: "Homem contraindo os músculos", type: PRACTICE_TYPE.KEEP_CONDITION },
]

const PRACTICE_TYPES_WOMAN = [
  { title: "PERDER PESO", img: iconWeightLossMan, alt: "Mulher perdendo peso", type: PRACTICE_TYPE.WEIGHT_LOSS },
  { title: "GANHAR MASSA", img: iconIncreaseMuscleWoman, alt: "Mulher fazendo exercício", type: PRACTICE_TYPE.INCREASE_MUSCLE },
  { title: "MANTER FORMA", img: iconKeepConditionWoman, alt: "Mulher fazendo abdominal", type: PRACTICE_TYPE.KEEP_CONDITION },
]

const PRACTICES = {
  [GENDERS.MASCULINO]: PRACTICE_TYPES_MAN,
  [GENDERS.FEMININO]: PRACTICE_TYPES_WOMAN
}

export function Objective({ gender, onChangeSection, onChangePracticeType }) {
  const [practices, setPractices] = useState([])



  useEffect(() => {
    if (!practices?.length) {
      setPractices([...PRACTICES[gender]])
    }
  }, [gender, practices])

  function handleClickPracticeType(type) {
    onChangePracticeType(type)
    onChangeSection(SECTIONS.PRACTICE_SELECTED)
  }

  function renderPracticeTypes() {
    return practices.map(({ title, img, alt, type }, index) =>
      <li key={index} >
        <button className="objective__item" onClick={() => handleClickPracticeType(type)} >
          <span className="objective__item-title">{title}</span>
          <img src={img} alt={alt} className="objective__img" />
        </button>
      </li>
    )
  }

  return <div className="objective">
    <h2 className="objective__title">QUAL É O SEU PRINCIPAL OBJETIVO?</h2>
    <ul className="objective__list">
      {renderPracticeTypes()}
    </ul>
  </div>
}