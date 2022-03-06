import MuiPagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react'

export default function Pagination() {

  const [page, setPage] = useState(1)

  const Pagination = withStyles({
    root: {
      display: 'inline-block',
    },
  })(MuiPagination);

  return (
    <div style={{textAlign: "center"}}>
      <Pagination
        count={12}
        variant="outlined"
        color="secondary"
        onChange={(e, page) => setPage(page)}
        page={page}
      />
    </div>
  );
}
