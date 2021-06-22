import React from 'react'

type Props = {
    children: JSX.Element[] | JSX.Element
}

export const ButtonGroup: React.FC<Props> = ({ children }: Props) => <div
    className='button-group-wrapper'>
    {children}
</div>
