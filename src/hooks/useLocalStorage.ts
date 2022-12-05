import React, { useEffect, useState } from "react";

type setState<T> = React.Dispatch<React.SetStateAction<T>>

export function useLocalStorage<T>(key: string, defaultValue: T): [T, setState<T>] {
    const items = window.localStorage.getItem(key)
    const [value, setValue ] = useState<T>(
        items ? JSON.parse(items) : defaultValue
    )
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}