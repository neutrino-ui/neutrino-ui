import React from 'react'
import {useForceUpdate} from '../hooks/use-force-update'

/** createSlots is a factory that can create a
 *  typesafe Slots + Slot pair to use in a component definition
 *  For example: ActionList.Item uses createSlots to get a Slots wrapper
 *  + Slot component that is used by LeadingVisual, Description
 */
const createSlots = <SlotNames extends string>(slotNames: SlotNames[]) => {
  type Slots = {
    [key in SlotNames]?: React.ReactNode
  }

  type ContextProps = {
    registerSlot: (name: SlotNames, contents: React.ReactNode) => void
    unregisterSlot: (name: SlotNames) => void
    context: Record<string, unknown>
  }
  const SlotsContext = React.createContext<ContextProps>({
    registerSlot: () => null,
    unregisterSlot: () => null,
    context: {}
  })

  /** Slots uses a Double render strategy inspired by [reach-ui/descendants](https://github.com/reach/reach-ui/tree/develop/packages/descendants)
   *  Slot registers themself with the Slots parent.
   *  When all the children have mounted = registered themselves in slot,
   *  we re-render the parent component to render with slots
   */
  const Slots: React.FC<{
    context?: ContextProps['context']
    children: (slots: Slots) => React.ReactNode
  }> = ({context = {}, children}) => {
    // initialise slots
    const slotsDefinition: Slots = {}
    slotNames.map(name => (slotsDefinition[name] = null))
    const slotsRef = React.useRef<Slots>(slotsDefinition)

    const rerenderWithSlots = useForceUpdate()
    const [isMounted, setIsMounted] = React.useState(false)

    // fires after all the effects in children
    React.useEffect(() => {
      rerenderWithSlots()
      setIsMounted(true)
    }, [rerenderWithSlots])

    const registerSlot = React.useCallback(
      (name: SlotNames, contents: React.ReactNode) => {
        slotsRef.current[name] = contents

        // don't render until the component mounts = all slots are registered
        if (isMounted) rerenderWithSlots()
      },
      [isMounted, rerenderWithSlots]
    )

    // Slot can be removed from the tree as well,
    // we need to unregister them from the slot
    const unregisterSlot = React.useCallback(
      (name: SlotNames) => {
        slotsRef.current[name] = null
        rerenderWithSlots()
      },
      [rerenderWithSlots]
    )

    /**
     * Slots uses a render prop API so abstract the
     * implementation detail of using a context provider.
     */
    const slots = slotsRef.current

    return (
      <SlotsContext.Provider value={{registerSlot, unregisterSlot, context}}>{children(slots)}</SlotsContext.Provider>
    )
  }

  const Slot: React.FC<{
    name: SlotNames
    children: React.ReactNode
  }> = ({name, children}) => {
    const {registerSlot, unregisterSlot, context} = React.useContext(SlotsContext)

    React.useEffect(() => {
      registerSlot(name, typeof children === 'function' ? children(context) : children)
      return () => unregisterSlot(name)
    }, [name, children, registerSlot, unregisterSlot, context])

    return null
  }

  return {Slots, Slot}
}

export default createSlots
