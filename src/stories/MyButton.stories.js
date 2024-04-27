import MyButton from "./MyButton";
import {action} from '@storybook/addon-actions';
import {within, userEvent, fn} from "@storybook/test";
import {expect} from "@storybook/jest";

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
    argTypes: {
        size: {
            type: {
                name: 'enum',
                value: ['small', 'medium', 'large'],
            },
            control: {type: 'select'},
            description: 'ボタンの大きさ'
        },
        handleClick: {action: 'clicked'}
    }
}

export const Default = {
    args: {
        primary: true,
        label: "ボタン"
    }
}

export const Index = {
    args: {
        ...Default.args,
        size: 'medium',
        handleClick: e => {
            action('clicked')(e, new Date())
        },
        onClick: fn()
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button')
        await userEvent.click(button)
        await userEvent.click(button)
        await expect(args.onClick).toHaveBeenCalledTimes(2)
    }
}

export const White = {
    args: {
        ...Default.args,
        size: 'small',
        backgroundColor: "#fff"
    }
}

export const Yellow = {
    args: {
        ...White.args,
        backgroundColor: 'lightyellow'
    }
}
