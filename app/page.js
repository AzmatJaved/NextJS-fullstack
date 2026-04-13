"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
 async function GET() {
  const { data, error } = await supabase.from("users").select("*");
  return NextResponse.json(data);
}
  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  const addUser = async () => {
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    const res = await fetch("/api/users");
    setUsers(await res.json());
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Add User</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={addUser}>Add</button>

      <h2>Users</h2>
      {users.map(u => (
        <p key={u.id}>{u.name} - {u.email}</p>
      ))}
    </main>
  );
}
