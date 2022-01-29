import React, { MouseEventHandler } from 'react';
import Label from './styled/Label.styled';
import Switch from './styled/Switch.styled';
import Input from './styled/Input.styled';

interface Props {
    onToggle: MouseEventHandler<HTMLInputElement>;
    label?: string;
    isChecked?: boolean;
}

function Toggle({ onToggle, label, isChecked = true }: Props): JSX.Element {
    return (
        <Label>
            <span>{ label }</span>
            <Input defaultChecked={ isChecked } type="checkbox" onClick={ onToggle } />
            <Switch />
        </Label>
    );
}


export default Toggle;
