import React from 'react'

const LaunchStat = ({ launches }) => {
    const totalLaunches = launches.length

    const successRatio = () => {
        const success = Math.round((launches.filter(launch => !launch.upcoming && launch.success).length) / totalLaunches * 100);
        return isNaN(success) ? "..." : success
    }

    const upcomingLaunches = () => {
        return launches.filter(launch => launch.upcoming).length
    }

    const cardStyle = "border px-10 py-3 text-center w-screen-1/4 shadow-lg rounded-lg"
    const cardHeading = "text-lg"

    return (
        <div className="flex w-90 mx-auto justify-around mb-10">
            <div className={cardStyle}>
                <div className={cardHeading}>Total Launches</div>
                <div>{ totalLaunches }</div>
            </div>
            <div className={cardStyle}>
                <div className={cardHeading}>Success (%)</div>
                <div>{ successRatio() }</div>
            </div>
            <div className={cardStyle}>
                <div className={cardHeading}>Upcoming Launches</div>
                <div>{ upcomingLaunches() }</div>
            </div>
            
        </div>
    )
}

export default LaunchStat
