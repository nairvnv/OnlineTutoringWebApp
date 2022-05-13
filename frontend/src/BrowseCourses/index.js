import './index.css';
import TutorCards from '../TutorCards/index'
import tutorData from '../tutors.json'
import { useEffect, useState } from 'react';

function BrowseCourses() {
  const [searchText, setText] = useState('')
  // console.log("lasdfasdf", tutorData.Tutor)
  const [tutordata, setTutorData] = useState(tutorData?.Tutor || [])

  useEffect(() => {
    setTutorData(
      tutorData.Tutor.filter((tutor) => { return tutor.course_name.toLowerCase().includes(searchText.toLowerCase()) || tutor.name.toLowerCase().includes(searchText.toLowerCase()) })
    )
  }, [searchText])
  return (
    <div class="container">
      <p class="lead courseHeader display-5">
        Browse our courses!
      </p>
      <input
        type={'text'}
        value={searchText}
        onChange={(event) => {
          setText(event.target.value)
        }}
        placeholder={'search here dynamically'}
      />
      <div class={'gridWrapper'}>
        {tutordata.map((tutor) => {
          return (
            <>
              <TutorCards
                name={tutor.name}
                img={''}
                aboutMe={tutor.aboutMe}
                courseName={tutor.course_name}
                rating={tutor.averageRating}
                userLoggedIn={true} //change later
              />
            </>
          )
        })}
      </div>
    </div>
  );
}

export default BrowseCourses;
