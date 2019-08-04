import React from 'react'

import appendQuery from 'append-query'

import Avatar from "./avatar"

const DayList = ({data, nameFilter=""}) => {
    const rx = new RegExp(nameFilter)
    const events = data.events.filter(e => {
        return e.name.match(rx)
    })
    return <div>
        <h3>{data.name} ({events.length} ครั้ง)</h3>
        <ul style={{listStyle: "none"}}>
            {
                events.map( (e, i) => {
                    return <li key={`${e.name}-${i}`}>
                        <a
                            href={appendQuery(data.videos[e.video_ix], {t: e.start_second})}
                            target="_blank"
                        >
                            <Avatar src={e.name}/> {e.name} ({e.type}, {e.duration})
                        </a>
                    </li>
                })
            }
        </ul>
    </div>
}

export default DayList