export default function ViewMore() {
  return (
    <div style={{ margin: "2em 0" }}>
      <a href="/blog" className="view-more-link">View More Posts</a>
      <style jsx>{`
        .view-more-link {
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .view-more-link:hover {
          color: #0070f3;
        }
      `}</style>
    </div>
  );
}