import {forwardRef, useImperativeHandle, useRef} from "react";

// eslint-disable-next-line react/display-name
const MyTextBox = forwardRef(({label}, ref) => {
    const input = useRef(null)

    useImperativeHandle(ref, () => {
            return {
                focus() {
                    input.current.focus()
                }
            }
        },
        [],
    );


    return (
        <label>
            {label}:
            <input type="text" size="15" ref={input}/>
        </label>
    )
});

export default MyTextBox
