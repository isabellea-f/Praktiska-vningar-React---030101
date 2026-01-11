export default function Card({ title, children }) {
  return (
    <>
      <div className="base-card">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

export function WarningCard({ children }) {
  return (
    <Card title="Warning">
      <div style={{ color: "red", fontWeight: "bold" }}>{children}</div>
    </Card>
  );
}

export function InfoCard({ children }) {
  return (
    <Card title="Information">
      <div style={{ backgroundColor: "blue", color: "white" }}>{children}</div>
    </Card>
  );
}
