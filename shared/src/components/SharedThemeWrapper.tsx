import React from 'react'
import './../index.css'

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const SharedThemeWrapper: React.FC<Props> = ({ children }: Props) => (<>{
    children
} </>)
