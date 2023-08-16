import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, Header } from "../../components";
import { GenderSelection, Objective, Practice, SECTIONS } from "./components";
import { ROUTES } from "../../constants/routes";

import "./practices.css";

const CONTENT = {
  [SECTIONS.GENDER_SELECTION]: {
    title: "META E FOCO",
    component: (props) => <GenderSelection {...props} />,
  },
  [SECTIONS.PRACTICE_SELECTION]: {
    title: "OBJETIVO",
    component: (props) => <Objective {...props} />,
  },
  [SECTIONS.PRACTICE_SELECTED]: {
    title: "",
    component: (props) => <Practice {...props} />,
  },
};

export function Practices() {
  const [sectionController, setSectionController] = useState(
    SECTIONS.GENDER_SELECTION
  );
  const [content] = useState({ ...CONTENT });
  const [gender, setGender] = useState("");
  const [practiceType, setPracticeType] = useState("");

  const navigate = useNavigate();

  function handleChangeGender(gender) {
    setGender(gender);
  }

  function handleChangeSection(section) {
    setSectionController(section);
  }

  function handleChangePracticeType(type) {
    setPracticeType(type);
  }

  function handleClickBack() {
    switch (sectionController) {
      case SECTIONS.GENDER_SELECTION:
        navigate(ROUTES.HOME);
        break;
      case SECTIONS.PRACTICE_SELECTION:
        setSectionController(SECTIONS.GENDER_SELECTION);
        break;
      case SECTIONS.PRACTICE_SELECTED:
        setSectionController(SECTIONS.PRACTICE_SELECTION);
        break;
      default:
        break;
    }
  }

  const currentContent = content[sectionController];

  return (
    <div className="container">
      <Header title={currentContent.title} onClick={handleClickBack} />

      <main className="practices__main">
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
  );
}
