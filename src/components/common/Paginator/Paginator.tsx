import React from "react";
import s from "./Paginator.module.scss";



type PaginatorPropsT = {
    totalPagesCount: Array<number>;
    currentPage: number;
    onPaginatorChange: (pageNumber: number) => void;
};

export const Paginator = ({ totalPagesCount, currentPage, onPaginatorChange }: PaginatorPropsT) => {
    const calcPagination = (pages: Array<number>, current: number) => {
        let last = pages.length,
            delta = 2,
            left = current - delta,
            right = current + delta,
            range = [],
            rangeWithDots = [],
            l;

        range.push(1);
        for (let i = left; i <= right; i++) {
            if (i >= left && i < right && i < last && i > 1) {
                range.push(i);
            }
        }
        range.push(last);
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    const pagesArr = calcPagination(totalPagesCount, currentPage);

    return (
        <>
            {pagesArr.map((p, i) => {
                return (
                    <span
                        key={i}
                        onClick={() => {
                            typeof p === "number" && onPaginatorChange(p);
                        }}
                        className={currentPage === p ? s.selectedPage : ""}
                    >
                        {p}
                    </span>
                );
            })}
        </>
    );
};