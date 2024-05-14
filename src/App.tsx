import React from 'react';
import './App.css';

interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}

export default function App() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a disabled button" disabled={false}/>
        </div>
    );
}
