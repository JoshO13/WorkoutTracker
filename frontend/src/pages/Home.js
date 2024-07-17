import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutsForm'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()


    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workouts._id} workout={workout} />
                ))}
            </div>
            <WorkoutsForm />
        </div>
    )
}

export default Home