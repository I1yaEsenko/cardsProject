import cn from 'classnames'

import s from './Pagination.module.scss'
import { usePagination } from "@/components/ui/pagination/usePagination";
import { Typography } from "@/components/ui/typography";
import { TypographyVariant } from "@/components/ui/typography/enum";
import { Selector, SelectProps } from "@/components/ui/selector";
import ArrowDown from "@/components/icons/ArrowDown";


type Props = {
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & Omit<SelectProps, 'fullWidth' | 'label' | 'pagination'>

export const Pagination = ({
                             currentPage,
                             onChangePage,
                             pageSize,
                             siblingCount = 1,
                             totalCount,
                             ...restProps
                           }: Props) => {

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return (
      <Typography as="div" className={s.selectContainer} variant={TypographyVariant.body2}>
        {'Show'}

        <Selector {...restProps} />
        {'on page'}
      </Typography>
    )
  }

  const handleClickPrev = () => {
    onChangePage(currentPage - 1)
  }

  const handleClickNext = () => {
    onChangePage(currentPage + 1)
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  return (
    <div className={cn(s.container)}> // className
      <div className={s.pagination}>
        <button
          className={cn(s.item, { [s.disabled]: isFirstPage })}
          disabled={isFirstPage}
          onClick={handleClickPrev}
        >
          <ArrowDown className={s.left} />
        </button>
        {paginationRange.map((num, i) => {
          if (num === 0) {
            return (
              <span className={cn(s.item, s.dots)} key={i}>
                &#8230;
              </span>
            )
          }
          const isCurrentPage = num === currentPage

          const handleChangePage = () => onChangePage(num)

          return (
            <button
              className={cn(s.item, { [s.selected]: isCurrentPage })}
              key={i}
              onClick={handleChangePage}
            >
              <Typography as="span" variant={TypographyVariant.body2}>
                {num}
              </Typography>
            </button>
          )
        })}
        <button
          className={cn(s.item, { [s.disabled]: isLastPage })}
          disabled={isLastPage}
          onClick={handleClickNext}
        >
          <ArrowDown className={s.right} />
        </button>
      </div>
      <Typography as="div" className={s.selectContainer} variant={TypographyVariant.body2}>
        {'Show'}
        <Selector {...restProps} />
        {'on page'}
      </Typography>
    </div>
  )
}
