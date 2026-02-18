import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), {
        name,
        date,
        time,
        createdAt: serverTimestamp()
      });
      alert("Booking submitted!");
      setName(""); setDate(""); setTime("");
    } catch (err) {
      console.error("Error adding booking:", err);
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
