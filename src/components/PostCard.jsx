import { useState } from "react";
import CommentList from "./CommentList";

function PostCard({ post, isFavorite, onToggleFavorite }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ color: "#1e40af" }}>{post.title}</h3>

      <p style={{ color: "#4a5568" }}>{post.body}</p>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button
          onClick={onToggleFavorite}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            color: isFavorite ? "red" : "gray",
          }}
        >
          {isFavorite ? " ถูกใจแล้ว" : " ถูกใจ"}
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            color: "#1e40af",
          }}
        >
          {showComments ? "ซ่อนความคิดเห็น" : "ดูความคิดเห็น"}
        </button>
      </div>

      {/*  ดึง API comments ตอนกดปุ่ม */}
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;