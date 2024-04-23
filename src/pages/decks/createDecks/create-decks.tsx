import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input'
import { useCreateDeckMutation } from '@/services/decks/decks.service'

export const CreateDecks = () => {
  const { control, handleSubmit } = useForm()
  const [createDeck, { isLoading: isDeckBeingCreate }] = useCreateDeckMutation()

  return (
    <form
      onSubmit={handleSubmit(data => {
        createDeck(data as any)
      })}
      style={{ border: '2px solid red', margin: '5px' }}
    >
      <ControlledInput control={control} name={'name'} />
      <ControlledCheckbox control={control} label={'Private Decks'} name={'isPrivate'} />
      <Button disabled={isDeckBeingCreate}>Create Deck</Button>
    </form>
  )
}
