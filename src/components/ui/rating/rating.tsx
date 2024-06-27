import Star from '@/assets/icons/components/Star'
import StarOutline from '@/assets/icons/components/StarOutline'

import s from './rating.module.scss'
type RatingType = {
  rating: number
}
export const Rating = ({ rating }: RatingType) => {
  const rate = rating ?? 0
  const stars = Array(5).fill(0)

  return (
    <div className={s.rating}>
      {stars.map((_, index) => {
        return (
          <div className={s.wrapper} key={index}>
            {index >= rate ? <StarOutline className={s.star} /> : <Star className={s.star} />}
          </div>
          // <StarOutline key={index} />

          // <div key={index} style={index >= rate ? { color: 'red' } : { color: 'green' }}>
          //   index
          // </div>
        )
      })}
    </div>
  )
}
