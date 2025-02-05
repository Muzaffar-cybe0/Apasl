import { useState } from "react";
import "../admin_Scss/scheduleSection.scss";
import dataJson from "../data/speakersData.json";

export default function ScheduleSection() {
  const [schedules, setSchedules] = useState(dataJson.schedules);
  const [editEvent, setEditEvent] = useState(null);
  const [deleteEvent, setDeleteEvent] = useState(null);

  return (
    <div className="schedule-section">
      <div className="schedule-form">
        <form>
          <div>
            <label htmlFor="date">Add New Date:</label>
            <input type="text" id="date" placeholder="4 June" />
          </div>
          <div>
            <label htmlFor="dates">Date:</label>
            <select name="dates" id="dates">
              {schedules.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.date}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input type="text" id="time" placeholder="10:30-13:00" />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" placeholder="Event title" />
          </div>
          <button type="submit">Add Date</button>
        </form>
      </div>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Time</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((item, dateIndex) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.date}</td>
                <td>
                  {item.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="schedule-event"
                      style={{ borderBottom: "1px solid gray", padding: "5px" }}
                    >
                      <p>{event.time}</p>
                      <br />
                    </div>
                  ))}
                </td>
                <td>
                  {item.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="schedule-event"
                      style={{ borderBottom: "1px solid gray", padding: "5px" }}
                    >
                      <p>{event.title}</p>
                      <br />
                    </div>
                  ))}
                </td>
                <td>
                  <div className="actions">
                    {item.events.map((event, eventIndex) => (
                      <div key={eventIndex}>
                        <button
                          onClick={() =>
                            setEditEvent({ dateIndex, eventIndex })
                          }
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            setDeleteEvent({ dateIndex, eventIndex })
                          }
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editEvent && (
        <div className="modal">
          <h3>Edit Event</h3>
          <input
            type="text"
            value={
              schedules[editEvent.dateIndex].events[editEvent.eventIndex].time
            }
            onChange={(e) => {
              const updatedSchedules = [...schedules];
              updatedSchedules[editEvent.dateIndex].events[
                editEvent.eventIndex
              ].time = e.target.value;
              setSchedules(updatedSchedules);
            }}
          />
          <input
            type="text"
            value={
              schedules[editEvent.dateIndex].events[editEvent.eventIndex].title
            }
            onChange={(e) => {
              const updatedSchedules = [...schedules];
              updatedSchedules[editEvent.dateIndex].events[
                editEvent.eventIndex
              ].title = e.target.value;
              setSchedules(updatedSchedules);
            }}
          />
          <button>Save</button>
          <button onClick={() => setEditEvent(null)}>Cancel</button>
        </div>
      )}

      {deleteEvent && (
        <div className="modal">
          <h3>Are you sure you want to delete this event?</h3>
          <button
            onClick={() => {
              const updatedSchedules = [...schedules];
              updatedSchedules[deleteEvent.dateIndex].events.splice(
                deleteEvent.eventIndex,
                1
              );
              setSchedules(updatedSchedules);
              setDeleteEvent(null);
            }}
          >
            Yes
          </button>
          <button onClick={() => setDeleteEvent(null)}>No</button>
        </div>
      )}
    </div>
  );
}
