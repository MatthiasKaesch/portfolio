import React from 'react'

const Timeslot = ({ id, time, events }) => {
  return (
    <div className="maingrid">
      <h2 className="griditem timeslot">{time}</h2>

      {events.map((event) => {
        return (
          <div className="panel_wrapper">
            <section className="panel_container">
              <div class="panel_grid">
                {event.tag && (
                  <p class="panel_tag" aria-label="Event type: {{event.type}}">
                    {event.tag}
                  </p>
                )}

                {/*   {% if event.link.url.href %} */}
                <p class="panel_link">
                  See more <span aria-hidden="true">→</span>
                </p>
                {/*  {% endif %} {% endif %} {% if event.link %} {% endif %} */}
              </div>

              <h3 class="panel_title">{event.title}</h3>

              {/*   {% if event.speakers %} */}
              <p class="panel_speakers">{event.speakers}</p>
              {/*   {% endif %} */}
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Timeslot
