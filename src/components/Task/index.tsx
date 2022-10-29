import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from "phosphor-react"
import "./styles.scss"

export function Task(){
    const check = true

    return (
        <div id="taskContainer">
            <div>
                <Checkbox.Root id='checkboxRoot' checked={check}>
                    <Checkbox.Indicator id='CheckboxIndicator'>
                        <Check weight="bold" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div id="task">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <button id="deleteTask"><Trash size={24} /></button>
        </div>
    )
}