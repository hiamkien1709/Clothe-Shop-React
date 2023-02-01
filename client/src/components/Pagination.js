import usePagination from "../hooks/usePagination";
import React from 'react'


const Pagination =  React.memo(({ totalPages }) => {
  const {firstArr, lastArr, prev, next, jump, isActive} = usePagination(totalPages)

  return (
    <div className="pagination">
      <button onClick={prev}>&laquo;</button>
      {
        firstArr.map(num => (
          <button
                key={num}
                className={`${isActive(num)}`}
                onClick={() => jump(num)}
                >{num}</button>
        ))
      }

      {
        lastArr.length > 0 && <button>...</button>
      }

      {
        lastArr.map(num => (
          <button
                  key={num}
                  className={`${isActive(num)}`}
                  onClick={() => jump(num)}
                  >{num}</button>
        ))
      }
      <button onClick={next}>&raquo;</button>
    </div>
  );
});

export default Pagination;
