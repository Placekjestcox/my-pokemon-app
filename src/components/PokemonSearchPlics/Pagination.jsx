import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} id="Previous" disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)} id="Next">Next</button>
    </div>
  );
};

export default Pagination;
