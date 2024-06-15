import { useForm } from 'react-hook-form'

import ImageOutline from '@/assets/icons/components/ImageOutline'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input'
import Dialog, { DialogType } from '@/components/ui/dialog/dialog'

import s from './create-decks.module.scss'
type CreateType = {
  onCancel?: () => void
  onSubmitForm: (data: any) => void
} & Omit<DialogType, 'cancelName' | 'children' | 'onCancel' | 'onSubmit' | 'submitName'>
export const CreateDecks = ({ onSubmitForm, ...rest }: CreateType) => {
  const { control, handleSubmit } = useForm()
  const onCancel = () => {
    rest.onOpenChange(false)
  }
  const onSubmitHandler = handleSubmit(data => {
    onSubmitForm(data)
    rest.onOpenChange(false)
  })

  return (
    <Dialog
      {...rest}
      cancelName={'Cancel'}
      onCancel={onCancel}
      onSubmit={onSubmitHandler}
      submitName={'Add New Pack'}
    >
      <form className={s.form} onSubmit={onSubmitHandler}>
        <ControlledInput control={control} label={'Name Pack'} name={'name'} />
        <Button variant={'secondary'}>{<ImageOutline />}Update Image</Button>
        <ControlledCheckbox control={control} label={'Private Decks'} name={'isPrivate'} />
      </form>
    </Dialog>
  )
}
