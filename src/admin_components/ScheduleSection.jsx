import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../admin_Scss/scheduleSection.scss";
import dataJson from "../data/speakersData.json";

export default function ScheduleSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [schedules, setSchedules] = useState(dataJson.schedules);
  const [editEvent, setEditEvent] = useState(null);
  const [deleteEvent, setDeleteEvent] = useState(null);
  const [addSpeakerModal, setAddSpeakerModal] = useState(null);
  const [newSpeaker, setNewSpeaker] = useState({ en: "", ru: "", uz: "" });

  const getEventTitle = (event) => {
    if (event.title) return event.title[currentLang] || "";
    if (event.session) return event.session[currentLang] || "";
    return "";
  };

  return (
    <div className="schedule-section">
      <div className="schedule-form">
        {/* --- Add New Event Form --- */}
        <div className="schedule-form_child-1">
          <form>
            <div className="form-field">
              <label htmlFor="dates">Date:</label>
              <select name="dates" id="dates">
                {schedules.map((item, index) => (
                  <option key={index} value={index}>
                    {item.date[currentLang]}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="time">Time:</label>
              <input type="text" id="time" placeholder="10:30-13:00" />
            </div>

            <div className="form-field multi-lang">
              <label>Title (EN):</label>
              <input type="text" placeholder="Event title in English" />
            </div>
            <div className="form-field multi-lang">
              <label>Title (RU):</label>
              <input type="text" placeholder="Event title in Russian" />
            </div>
            <div className="form-field multi-lang">
              <label>Title (UZ):</label>
              <input type="text" placeholder="Event title in Uzbek" />
            </div>
            <button type="submit">Add Event</button>
          </form>
        </div>

        {/* --- Add New Date Form --- */}
        <div className="schedule-form_child-2">
          <form>
            <div className="form-field multi-lang">
              <label>Date (EN):</label>
              <input type="text" placeholder="4 June" />
            </div>
            <div className="form-field multi-lang">
              <label>Date (RU):</label>
              <input type="text" placeholder="4 июня" />
            </div>
            <div className="form-field multi-lang">
              <label>Date (UZ):</label>
              <input type="text" placeholder="4-iyun" />
            </div>
            <button type="submit">Add Date</button>
          </form>
        </div>
      </div>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Time</th>
              <th>Title</th>
              <th>Speakers</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, dateIndex) =>
              schedule.events.map((event, eventIndex) => (
                <tr key={`${dateIndex}-${eventIndex}`}>
                  <td>{`${dateIndex + 1}.${eventIndex + 1}`}</td>
                  <td>{schedule.date[currentLang]}</td>
                  <td>{event.time}</td>
                  <td>{getEventTitle(event)}</td>
                  <td>
                    {event.speakers && event.speakers.length > 0 ? (
                      event.speakers.map((speaker, i) => (
                        <div key={i}>{speaker.name[currentLang]}</div>
                      ))
                    ) : (
                      <span>No speakers</span>
                    )}
                  </td>
                  <td>
                    <div className="actions">
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
                      <button
                        onClick={() => {
                          setAddSpeakerModal({ dateIndex, eventIndex });
                          setNewSpeaker({ en: "", ru: "", uz: "" });
                        }}
                      >
                        Add Speaker
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* --- Edit Event Modal --- */}
      {editEvent && (
        <div className="modal">
          <h3>Edit Event</h3>
          <div className="edit-field">
            <label>Time:</label>
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
          </div>
          {schedules[editEvent.dateIndex].events[editEvent.eventIndex].title && (
            <>
              <div className="edit-field">
                <label>Title (EN):</label>
                <input
                  type="text"
                  value={
                    schedules[editEvent.dateIndex].events[editEvent.eventIndex]
                      .title.en || ""
                  }
                  onChange={(e) => {
                    const updatedSchedules = [...schedules];
                    updatedSchedules[editEvent.dateIndex].events[
                      editEvent.eventIndex
                    ].title.en = e.target.value;
                    setSchedules(updatedSchedules);
                  }}
                />
              </div>
              <div className="edit-field">
                <label>Title (RU):</label>
                <input
                  type="text"
                  value={
                    schedules[editEvent.dateIndex].events[editEvent.eventIndex]
                      .title.ru || ""
                  }
                  onChange={(e) => {
                    const updatedSchedules = [...schedules];
                    updatedSchedules[editEvent.dateIndex].events[
                      editEvent.eventIndex
                    ].title.ru = e.target.value;
                    setSchedules(updatedSchedules);
                  }}
                />
              </div>
              <div className="edit-field">
                <label>Title (UZ):</label>
                <input
                  type="text"
                  value={
                    schedules[editEvent.dateIndex].events[editEvent.eventIndex]
                      .title.uz || ""
                  }
                  onChange={(e) => {
                    const updatedSchedules = [...schedules];
                    updatedSchedules[editEvent.dateIndex].events[
                      editEvent.eventIndex
                    ].title.uz = e.target.value;
                    setSchedules(updatedSchedules);
                  }}
                />
              </div>
            </>
          )}
          <button onClick={() => setEditEvent(null)}>Save</button>
          <button onClick={() => setEditEvent(null)}>Cancel</button>
        </div>
      )}

      {/* --- Delete Event Modal --- */}
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

      {/* --- Add Speaker Modal --- */}
      {addSpeakerModal && (
        <div className="modal">
          <h3>Add Speaker</h3>
          <div className="edit-field">
            <label>Speaker Name (EN):</label>
            <input
              type="text"
              value={newSpeaker.en}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, en: e.target.value })
              }
            />
          </div>
          <div className="edit-field">
            <label>Speaker Name (RU):</label>
            <input
              type="text"
              value={newSpeaker.ru}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, ru: e.target.value })
              }
            />
          </div>
          <div className="edit-field">
            <label>Speaker Name (UZ):</label>
            <input
              type="text"
              value={newSpeaker.uz}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, uz: e.target.value })
              }
            />
          </div>
          <button
            onClick={() => {
              const updatedSchedules = [...schedules];
              const event =
                updatedSchedules[addSpeakerModal.dateIndex].events[
                  addSpeakerModal.eventIndex
                ];
              if (!event.speakers) {
                event.speakers = [];
              }
              event.speakers.push({
                name: {
                  en: newSpeaker.en,
                  ru: newSpeaker.ru,
                  uz: newSpeaker.uz,
                },
              });
              setSchedules(updatedSchedules);
              setAddSpeakerModal(null);
              setNewSpeaker({ en: "", ru: "", uz: "" });
            }}
          >
            Add Speaker
          </button>
          <button onClick={() => setAddSpeakerModal(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
