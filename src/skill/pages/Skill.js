import React, { useState } from 'react';
import { techInfo, teamInfo, intInfo } from '../data/skillInfo';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import SkillShowcase from '../components/SkillShowcase';

function Skill() {
  const [toggleState, setToggleState] = useState({
    one: '',
    two: '',
    three: ''
  });

  function skillShowcase(skill) {
    return (
      <SkillShowcase
        attribute={skill.attribute}
        description={skill.description}
        key={skill.id}
      />
    );
  }

  function toggle(event) {
    if (event.currentTarget.id === 'techSkills') {
      setToggleState(prevToggleState => {
        return {
          ...prevToggleState,
          one: toggleState.one === '' ? 'flip' : ''
        };
      });
    } else if (event.currentTarget.id === 'teamSkills') {
      setToggleState(prevToggleState => {
        return {
          ...prevToggleState,
          two: toggleState.two === '' ? 'flip' : ''
        };
      });
    } else {
      setToggleState(prevToggleState => {
        return {
          ...prevToggleState,
          three: toggleState.three === '' ? 'flip' : ''
        };
      });
    }
  }

  return (
    <div id="skills" className="scrollEffect skill__outlineBlueprint">
      <div className="sectionTitle">
        <h2 className="subTitle">Character Bio</h2>
      </div>
      <div className="skill__contentBlueprint">
        <ScrollAnimation animateIn="flipInX" animateOut="fadeOut">
          <div
            onClick={toggle}
            id="techSkills"
            className={`card ${toggleState.one}`}
          >
            <div className={`card__face card__face--front`}>
              <h3 className="subTitle">Technical Skills</h3>
            </div>
            <div className={`card__face card__face--back`}>
              <div className="skill__showcase">
                {techInfo.map(skillShowcase)}
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" delay={250} animateOut="fadeOut">
          <div
            onClick={toggle}
            id="teamSkills"
            className={`card ${toggleState.two}`}
          >
            <div className={`card__face card__face--front`}>
              <h3 className="subTitle">Team Skills</h3>
            </div>
            <div className={`card__face card__face--back`}>
              <div className="skill__showcase">
                {teamInfo.map(skillShowcase)}
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" delay={500} animateOut="fadeOut">
          <div
            onClick={toggle}
            id="interests"
            className={`card ${toggleState.three}`}
          >
            <div className={`card__face card__face--front`}>
              <h3 className="subTitle">Interests</h3>
            </div>
            <div className={`card__face card__face--back`}>
              <div className="skill__showcase">
                {intInfo.map(skillShowcase)}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Skill;
