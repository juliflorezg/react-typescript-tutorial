import { useCallback } from 'react'
import { Equal, Expect } from '../helpers/type-utils'

export const Buttons = (props: { id: string }) => {
  //!! const onClick = useCallback<string>(
  //> useCallback has to be of type Function
  // const onClick = useCallback<(buttonName: string) => void>(
  //   buttonName => {
  //     console.log(props.id, buttonName)
  //   },
  //   [props.id]
  // )
  //> alternatively, we can rely on inference and pass the type to tye argument
  const onClick = useCallback(
    (buttonName: string) => {
      console.log(props.id, buttonName)
    },
    [props.id]
  )

  type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>

  return (
    <div>
      <button onClick={() => onClick('A')}>A</button>
      <button onClick={() => onClick('B')}>B</button>
      <button onClick={() => onClick('C')}>C</button>
    </div>
  )
}
