import classes from "./Paginator.module.css"

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            key={page}
            className={currentPage === page ? classes.selectedPage : undefined}
            onClick={() => {
              onPageChanged(page)
            }}
          >
            {page}
          </span>
        )
      })}
    </div>
  )
}

export default Paginator
