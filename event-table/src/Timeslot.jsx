import React from 'react'

const Timeslot = ({ id, time, events }) => {
  return (
    <div className="maingrid">
      <h2 className="griditem timeslot">{time}</h2>

      {events.map((event) => {
        return (
          <div className="panel_wrapper">
            <section
              className={`panel_container${event.title ? '' : '__empty'}`}
            >
              <div className="panel_grid">
                {event.tag && (
                  <p
                    className="panel_tag"
                    aria-label="Event type: {{event.type}}"
                  >
                    {event.tag}
                  </p>
                )}
              </div>

              <h3 className="panel_title">{event.title}</h3>

              <p>{event.description}</p>

              {/*   {% if event.speakers %} */}
              <p className="panel_speakers">{event.speakers}</p>
              {/*   {% endif %} */}
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Timeslot
