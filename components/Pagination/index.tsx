import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
const PaginationButtons = () => (
  <Pagination className="mt-4">
    <PaginationContent className="gap-2 flex-row-reverse">
      <PaginationItem>
        <PaginationNext href="#" className="pagination-button bg-[#1A2140]">
          <span className="sr-only">بعدی</span>
          <ChevronRightIcon className="icon-sm" />
        </PaginationNext>
      </PaginationItem>

      {[1, 2, 3].map((page, index) => (
        <PaginationItem key={index}>
          <PaginationLink
            dir="ltr"
            isActive={page === 1}
            className={`pagination-button border-none ${page === 1 ? "bg-[#3A6FF8]" : "bg-[#1A2140]"}`}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationPrevious href="#" className="pagination-button bg-[#1A2140]">
          <span className="sr-only ">قبلی</span>
          <ChevronLeftIcon className="icon-sm" />
        </PaginationPrevious>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);
export default PaginationButtons;
