export default function ProfileCard({
  name,
  title,
  desc = "No description available",
  img,
  alertName,
}) {
  return (
    <div className="profile-card" onClick={() => alertName(name)}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
