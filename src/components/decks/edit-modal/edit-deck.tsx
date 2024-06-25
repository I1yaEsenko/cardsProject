import { useForm } from 'react-hook-form'

import ImageOutline from '@/assets/icons/components/ImageOutline'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input'
import Dialog, { DialogType } from '@/components/ui/dialog/dialog'

import s from '@/components/decks/create-decks/create-decks.module.scss'

type DeleteType = {
  isPrivate: string
  name: string
  onCancel?: () => void
  onSubmitForm: (data: any) => void
} & Omit<DialogType, 'cancelName' | 'children' | 'onCancel' | 'onSubmit' | 'submitName'>

const EditDeck = ({ isPrivate, name, onSubmitForm, ...rest }: DeleteType) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      isPrivate,
      name,
    },
  })
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

export default EditDeck
