import React from 'react'
import { useOnMount, useOnUnmount, useLifecycleHooks } from 'react-hookedup'

const UseLifeCycles = () => {
  useOnMount(() => console.log('Life Cycles comnponent: useOnMount =]'))
  useOnUnmount(() => console.log('Life Cycles comnponent: useOnUnmount =]'))

  useLifecycleHooks({
		onMount: () => console.log('Life Cycles comnponent: useLifecycleHooks > onMount =P'),
		onUnmount: () => console.log('Life Cycles comnponent: useLifecycleHooks > onUnmount =P')
	})

  return <p>Testing life cycle hooks!</p>
}

export default UseLifeCycles

// an useEffect hook with an empty array as second argument works just the same as useOnMount

/*
export default function OnMountWithEffect () {
  useEffect(() => console.log('mounted with effect'), [])

  return <div>look at the console :)</div>
}
*/

// returning a function from an useEffect hook works just the same as useOnUnmount

/*
export default function OnMountWithEffect () {
  useEffect(() => {
    return () => console.log('mounted with effect')
  }, [])

  return <div>look at the console :)</div>
}
*/

// Those can be combined into one:

/*
export default function OnMountWithEffect () {
  useEffect(() => {
    console.log('mounted with effect')

    return () => console.log('unmounting with effect')
  }, [])

  return <div>look at the console :)</div>
}
*/
