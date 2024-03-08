import "./app.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "deviantart",
      name: "Deviant Art",
      isFollowing: false,
    },
    {
      userName: "midudev",
      name: "Miguél Ángel Durán",
      isFollowing: true,
    },
    {
      userName: "soundcloud",
      name: "Soundcloud",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      <h2 className="app-title">A quién seguir</h2>
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
