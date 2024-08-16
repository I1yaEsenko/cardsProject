import { useForm } from 'react-hook-form'

import ImageOutline from '@/assets/icons/components/ImageOutline'
import { FormCreateType, createDecksSchema } from '@/components/decks/schema-decks'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input'
import Dialog, { DialogType } from '@/components/ui/dialog/dialog'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './create-decks.module.scss'
type CreateType = {
  isPrivate?: boolean
  name?: string
  onCancel?: () => void
  onSubmitForm: (data: any) => void
} & Omit<DialogType, 'cancelName' | 'children' | 'onCancel' | 'onSubmit' | 'submitName'>

export const CreateDecks = ({ isPrivate, name, onSubmitForm, ...rest }: CreateType) => {
  const { control, handleSubmit } = useForm<FormCreateType>({
    defaultValues: {
      isPrivate: isPrivate || false,
      name: name || '',
    },
    resolver: zodResolver(createDecksSchema),
  })

  const onCancel = () => {
    rest.onOpenChange(false)
  }
  const onSubmitHandler = handleSubmit(data => {
    onSubmitForm(data)
    rest.onOpenChange(false)
  })

  console.log(control)

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
