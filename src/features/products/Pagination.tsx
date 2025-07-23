import { Button } from "../../components/ui/button";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export default function Pagination({ page, setPage, totalPages }: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <Button variant="outline" onClick={handlePrev} disabled={page === 1}>
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </span>
      <Button variant="outline" onClick={handleNext} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
}
