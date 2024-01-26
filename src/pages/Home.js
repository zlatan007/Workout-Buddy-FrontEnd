import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const Home = () => {
  const {workouts, dispatch} = useWorkoutContext();

  console.log('state', workouts);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      console.log('json', json);

      if (response.ok) {
        dispatch({ type: "SET_WORKOUT", payload: json})
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home