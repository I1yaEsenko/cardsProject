import Dialog, { DialogType } from '@/components/ui/dialog/dialog'
import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'

import s from './delete-decks.module.scss'
type DeleteProps = {
  onSubmit: () => void
  titleDeck: string
} & Omit<DialogType, 'children' | 'onCancel'>
const DeleteDecks = ({ onSubmit, titleDeck, ...rest }: DeleteProps) => {
  const onCancel = () => {
    rest.onOpenChange(false)
  }

  return (
    <Dialog
      {...rest}
      cancelName={'Cancel'}
      onCancel={onCancel}
      onSubmit={onSubmit}
      submitName={'Delete Card'}
    >
      <p className={s.form}>
        Do you really want to remove{' '}
        {
          <Typography as={'span'} variant={TypographyVariant.subtitle1}>
            {titleDeck}?
          </Typography>
        }
        <br /> All cards will be deleted.
      </p>
    </Dialog>
  )
}

export default DeleteDecks
