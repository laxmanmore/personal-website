import {React, useContext} from 'react'
import {ResumeContext} from '../ResumeBuilder'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Skills() {
  const resumeContext = useContext(ResumeContext);
  const skills = resumeContext.skills;

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      {skills.map((value, index) => {
        return <ListItem key={index}>
          <ListItemText primary={value.name} />
        </ListItem>
      })}
    </div>
  )
}

export default Skills
